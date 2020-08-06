import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../components/Home";
import Jamii from "../components/Jamii";
import Bima from "../components/Bima";
import Colors from "../../Colors";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightblue,
        },
        headerTitleAlign: "center",
        headerTintColor: Colors.darkWhite,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: "KARIBU" }}
      />
      <Stack.Screen
        name="Jamii"
        component={Jamii}
        options={{ title: "MFUKO WA JAMII" }}
      />
      <Stack.Screen name="Bima" component={Bima} options={{ title: "BIMA" }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
