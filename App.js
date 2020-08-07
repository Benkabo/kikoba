import React, { useState, useEffect, useMemo } from "react";
import { YellowBox } from "react-native";

import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  ApolloProvider,
  useLazyQuery,
} from "@apollo/client";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./src/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStack";
import { DrawerContent } from "./src/screens/DrawerContent";
import Firebase from "./utils/firebase";
import AddAccount from "./src/components/AddAccount";
import AddAccountStack from "./src/components/AddAccount";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: "https://rich-drum-88.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "kabo1171997",
    "content-type": "application/json",
  },
  cache: new InMemoryCache(),
});

const AuthenticatedHome = () => {
  const firebase = Firebase;
  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: {
      id: firebase.auth().currentUser.uid,
    },
  });
  if (error) {
    return <Text>Error {JSON.stringify(error)}</Text>;
  }
  if (loading) {
    return <Splash message="Loading data ..." />;
  }
  if (data) {
    return <MainStackNavigator />;
  }
};

const Routes = () => {
  const firebase = Firebase;

  const [authState, setAuthState] = useState({ status: "loading" });
  const [getUser, { loading, data }] = useLazyQuery(FETCH_USER);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const userFinal = await getUser(user.uid);

        console.log("User fetched: ", userFinal);
        const hasureClaims =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasureClaims) {
          setAuthState({ status: "in", user, token });
        } else {
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if (!data.exists) return;
            const token = await user.getIdToken(true);
            console.log("The current user data", data);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  if (authState.status === "loading") {
    // return <Splash message="Initializing the app..." />;
    return <AuthStackNavigator />;
    // return <AddAccount />
    // return <AddAccountStack />

  }
  if (authState.status === "out") {
    return <AuthStackNavigator />;
  }
  if (authState.status === "in") {
    return <MainStackNavigator />;
  }
};

export default function App() {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);

  // if (loading) {
  //   return <Splash messasge="Loading ..." />;
  // }
  // return (
  //   <NavigationContainer>
  //     {user ? (
  //       <Drawer.Navigator
  //         drawerContent={(props) => <DrawerContent {...props} />}
  //       >
  //         <Drawer.Screen name="Home" component={MainStackNavigator} />
  //       </Drawer.Navigator>
  //     ) : (
  //       <AuthStackNavigator />
  //     )}
  //   </NavigationContainer>
  // );
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const FETCH_USER = gql`
  query fetchUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      firstname
      lastname
    }
  }
`;
