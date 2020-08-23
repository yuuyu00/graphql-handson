import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StartWars } from "./StarWars";

const apolloClient = new ApolloClient({
  uri: "https://swapi.graph.cool/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <StartWars />
    </ApolloProvider>
  );
};
