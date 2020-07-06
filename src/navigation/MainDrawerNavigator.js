import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AddAccount from "../components/AddAccount";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../components/HomaPage";
import { DrawerContent } from '../screens/DrawerContent' 

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

HomeStackScreen = () => {
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
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigator;
