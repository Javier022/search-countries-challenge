import { ApolloClient, InMemoryCache } from "@apollo/client";
import { api } from "constants/api";

export const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
});
