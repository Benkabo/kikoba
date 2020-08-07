import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../Colors";

export default function Splash({ message }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ActivityIndicator size="large" color={Colors.lightblue} />
  <Text style={{fontSize: 30, paddingLeft: 15}}>{ message }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
