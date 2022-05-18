import React from "react";
import Routes from "routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

// notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
