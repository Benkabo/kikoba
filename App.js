import React, { useState, useEffect } from "react";
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import Splash from "./src/screens/Splash";
import MainDrawerNavigator from "./src/navigation/MainDrawerNavigator";
import firebase from '@react-native-firebase/app'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return <MainStackNavigator />;
  // return <MainDrawerNavigator />
}
