import React, { useState, useEffect, useMemo } from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context/context";
import Splash from "./src/screens/Splash";
import firebase from "@react-native-firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStack";
import { DrawerContent } from "./src/screens/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("abcd");
      setLoading(false);
    },
    signUp: () => {
      setUserToken("abcd");
      setLoading(false);
    },
    LogOut: () => {
      setUserToken(null);
      setLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
          </Drawer.Navigator>
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
