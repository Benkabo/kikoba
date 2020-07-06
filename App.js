import React, { useState, useEffect } from "react";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import Splash from "./src/screens/Splash";
import MainDrawerNavigator from "./src/navigation/MainDrawerNavigator";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Splash />;
  }
  // return <MainStackNavigator />;
  return <MainDrawerNavigator />
}
