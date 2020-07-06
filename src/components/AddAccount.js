import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

export default function AddAccount() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Jina la kwanza"
        mode="outlined"
        theme={theme}
        style={{ marginBottom: 10 }}
        value={firstname}
        onChangeText={(val) => setFirstName(val)}
      />
      <TextInput
        label="Jina la Mwisho"
        mode="outlined"
        theme={theme}
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
        label="Neno la siri"
        mode="outlined"
        theme={theme}
        style={{ marginBottom: 10 }}
        secureTextEntry={true}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <View style={styles.button}>
        <TouchableOpacity style={styles.signin}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkWhite,
            }}
          >
            TUMA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
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
