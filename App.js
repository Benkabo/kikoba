import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomePage from "./src/components/HomaPage";
import Colors from "./Colors";
import Jamii from "./src/components/Jamii";
import RegisterScreen from "./src/screens/RegisterScreen";
import Bima from './src/components/Bima';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StartScreen}>
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
          options={{ headerTitleAlign: 'center',
          headerTitle: "REGISTER",}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTitleAlign: "center",
            headerTitle: "KARIBU",
            headerTintColor: Colors.darkWhite,
            headerStyle: {
              backgroundColor: Colors.lightblue,
            },
          }}
        />
        <Stack.Screen
          name="Jamii"
          component={Jamii}
          options={{
            headerTitleAlign: "center",
            headerTitle: "MFUKO WA JAMII",
            headerTintColor: Colors.darkWhite,
            headerStyle: {
              backgroundColor: Colors.lightblue,
            },
          }}
        />
         <Stack.Screen
          name="Bima"
          component={Bima}
          options={{
            headerTitleAlign: "center",
            headerTitle: "MFUKO WA JAMII",
            headerTintColor: Colors.darkWhite,
            headerStyle: {
              backgroundColor: Colors.lightblue,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}