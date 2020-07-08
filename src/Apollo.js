import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const makeApolloClient = (token) => {
  // Creating an apollo link
  const link = new HttpLink({
    uri: `https://relaxed-bug-67.hasura.app/v1/graphql`,
    headers: {
      Authorization: `Bearers ${token}`,
    },
  });

  //  Creating InMemory cache instance for caching graphql data
  const cache = new InMemoryCache();

  //  Instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
};

export default makeApolloClient;
