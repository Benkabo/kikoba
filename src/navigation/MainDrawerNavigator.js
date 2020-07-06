import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AddAccount from "../components/AddAccount";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../components/HomaPage";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomePage}
      options={{ title: "KARIBU" }}
    />
  </HomeStack.Navigator>;
};

const MainDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={HomeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigator;
