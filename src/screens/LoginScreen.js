import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../Colors";

import { AuthContext } from '../../context/context'


export default LoginScreen = ({navigation}) => {

  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}> Phonenumber </Text>
        <View style={styles.action}>
          <FontAwesome name="phone" size={22} />
          <TextInput
            placeholder="Phone number"
            style={styles.textInput}
            keyboardType="numeric"
          />
          <Feather name="check-circle" size={20} />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}> Password </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" size={22} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <Feather name="eye-off" size={20} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => signIn()}>
            <Text style={[styles.textSign, { color: colors.darkWhite }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text_footer: {
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    color: colors.darkWhite,
    marginBottom: 30,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  logIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#97BFF5",
    paddingBottom: 2,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    marginTop: -15,
    fontSize: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
});
