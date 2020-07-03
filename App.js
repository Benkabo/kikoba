import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomePage from "./src/components/HomaPage";
import Colors from "./Colors";
import Jamii from "./src/components/Jamii";
import RegisterScreen from "./src/screens/RegisterScreen";
import Bima from "./src/components/Bima";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StartScreen}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.lightblue,
          },
          headerTitleAlign: "center",
          headerTintColor: Colors.darkWhite,
        }}
      >
        <Stack.Screen
          name="Loading"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={RegisterScreen}
          options={{ title: "REGISTER" }}
        />
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
        <Stack.Screen
          name="Bima"
          component={Bima}
          options={{ title: "BIMA" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
