import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if(!firestoreDocument.exists) {
              alert('User does not exist anymore.')
              return;
            }
            const user = firestoreDocument.data()
            navigation.navigate('Home', {user})
          })
          .catch(error => {
            alert(error)
          })
      })
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          label="Email"
          mode="outlined"
          theme={theme}
          style={styles.input}
          value={email}
          onChangeText={(val) => setEmail(val)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          mode="outlined"
          placeholderTextColor="#aaaaaa"
          theme={theme}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(val) => setPassword(val)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 250,
    marginHorizontal: 20,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
    fontSize: 18,
  },
  button: {
    backgroundColor: Colors.blue,
    marginTop: 20,
    marginLeft: 12,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
