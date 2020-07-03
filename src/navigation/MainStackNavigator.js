import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomaPage from "../components/HomaPage";
import Jamii from "../components/Jamii";
import Bima from "../components/Bima"
import Colors from "../../Colors";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
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
          component={HomaPage}
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
};

export default MainStackNavigator;
