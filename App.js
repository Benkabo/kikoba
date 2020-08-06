import React, { useState, useEffect, useMemo } from "react";
import { YellowBox } from 'react-native'
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./src/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStack";
import { DrawerContent } from "./src/screens/DrawerContent";
import Firebase from "./utils/firebase";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  YellowBox.ignoreWarnings(['Setting a timer'])
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // useEffect(() => {
  //   Firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={MainStackNavigator} />
        </Drawer.Navigator>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}
