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
import MainStackNavigator from "./src/navigation/MainStackNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MainStackNavigator />
  );
}
