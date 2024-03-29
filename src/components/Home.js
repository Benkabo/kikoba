import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

export default HomePage = ( props, { navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text>Header</Text> */}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, {marginRight: 200}]}>MKOPO</Text>
          <AntDesign name="pluscircleo" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, {marginRight: 225}]}>HISA</Text>
          <AntDesign name="pluscircleo" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bima')}>
          <Text style={[styles.text, {marginRight: 220}]}>BIMA</Text>
          <AntDesign name="pluscircleo" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Jamii")}
        >
          <Text style={[styles.text, {marginRight: 120}]}>MFUKO WA JAMII</Text>
          <AntDesign name="pluscircleo" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkWhite,
  },
  footer: {
    flex: 4,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    backgroundColor: colors.blue,
    marginBottom: 25,
    marginTop: 15,
    borderRadius: 3,
  },
  text: {
    color: colors.darkWhite,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
