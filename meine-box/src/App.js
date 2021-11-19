import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import ProductsOverview from "./components/molecules/overview/ProductsOverview";
import logo from "./logo.svg";
import "./Styles.scss";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries";

Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  //const [farmer, setFarmer] = React.useState();

  async function getFarmer() {
    const farmer = await API.graphql(
      graphqlOperation(queries.getFarmer, { id: 1 })
    );
    console.log(farmer);
  }

  React.useEffect(() => {
    getFarmer();
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Meine Box. This is our test branch!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>{}</p>
      </div>
      <ProductsOverview />
    </div>
  ) : (
    <Authentication />
  );
}

export default App;
