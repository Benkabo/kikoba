import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  ApolloProvider,
  useLazyQuery,
  useMutation,
} from "@apollo/client";

import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

import Firebase from "../../utils/firebase";
import "firebase/firestore";

export default function RegisterScreen({ navigation }) {

  const [addUser] = useMutation(ADD_USER)

  const onRegisterPress = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then( async (response) => {
        // const uid = response.user.uid;
        // const data = {
        //   id: uid,
        //   email,
        //   firstname,
        //   lastname,
        //   phone,
        //   group,
        // };
        // const usersRef = Firebase.firestore().collection("users");
        // usersRef
        //   .doc(uid)
        //   .set(data)
        //   .then()
        //   .catch((error) => {
        //     console.log("No data sent to firebase database", error);
        //     alert(error);
        //   });
          let user = Firebase.auth().currentUser;
          try {
            const updateProfile = await user.updateProfile({
              displayName: firstname,
            })
            const updateUserData = await addUser({
              variables: {
                firstname,
                lastname,
                email,
                phone,
                group,
                id: user.uid
              }
            })
            console.log("User db details", updateUserData)
            console.log("User details", updateProfile)
          } catch (e) {
            console.log("Exception", e)
          }
      })
      .catch((error) => {
        alert("Failed to create user",error);
      });
  };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [enableShift, setEnableShift] = useState(false);

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
      enabled={enableShift}
    >
      <View>
        <TextInput
          label="Jina la kwanza"
          mode="outlined"
          theme={theme}
          onFocus={() => setEnableShift(false)}
          style={{ marginBottom: 10 }}
          value={firstname}
          onChangeText={(val) => setFirstName(val)}
        />
        <TextInput
          label="Jina la Mwisho"
          mode="outlined"
          theme={theme}
          onFocus={() => setEnableShift(false)}
          style={{ marginBottom: 10 }}
          value={lastname}
          onChangeText={(val) => setLastName(val)}
        />
        <TextInput
          label="Namba ya simu"
          mode="outlined"
          theme={theme}
          keyboardType="numeric"
          style={{ marginBottom: 10 }}
          value={phone}
          onChangeText={(val) => setPhone(val)}
        />
        <TextInput
          label="Email"
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          value={email}
          onChangeText={(val) => setEmail(val)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          label="Neno la siri"
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <TextInput
          label="Jina la Kundi"
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          value={group}
          onChangeText={(val) => setGroup(val)}
        />
        <TextInput
          label="Namba ya kundi"
          mode="outlined"
          theme={theme}
          onFocus={() => setEnableShift(true)}
          style={{ marginBottom: 10 }}
        />
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signin}
            onPress={() => onRegisterPress()}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Colors.darkWhite,
              }}
            >
              SAJILI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const ADD_USER = gql`
  mutation insert_users_one(
    $email: String!
    $firstname: String!
    $group: String!
    $id: String!
    $lastname: String!
    $phone: String!
  ) {
    insert_users(
      objects: {
        email: $email
        firstname: $firstname
        id: $id
        group: $group
        lastname: $lastname
        phone: $phone
      }
    ) {
      affected_rows
    }
  }
`;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
  },
  signin: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: colors.blue,
  },
});
