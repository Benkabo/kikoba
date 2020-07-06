import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

export default function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

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
        value={firstName}
        onChangeText={(val) => setFirstName(val)}
      />
      <TextInput
        label="Jina la mwisho"
        mode="outlined"
        theme={theme}
        style={{ marginBottom: 10 }}
        value={lastName}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
