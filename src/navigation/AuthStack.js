import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Colors from "../../Colors";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={StartScreen}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightblue,
        },
        headerTitleAlign: "center",
        headerTintColor: Colors.darkWhite,
        headerLeft: null,
      }}
    >
      <AuthStack.Screen
        name="Loading"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="Signup"
        component={RegisterScreen}
        options={{ title: "TENGENEZA KUNDI" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
