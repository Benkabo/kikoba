import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

import Firebase from "../../utils/firebase";
import "firebase/firestore";

export default function LoginScreen({ navigation }) {
  const onLoginPress = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = Firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            console.log(user)
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        theme={theme}
        style={styles.input}
        value={email}
        onChangeText={(val) => setEmail(val)}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        mode="outlined"
        theme={theme}
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(val) => setPassword(val)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderRadius: 4,
    padding: 15,
  },
  buttonTitle: {
    fontSize: 20,
    color: Colors.darkWhite,
    fontWeight: "bold",
  },
});
