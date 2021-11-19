import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import ProductsOverview from "./components/molecules/overview/ProductsOverview";
import logo from "./logo.svg";
import "./Styles.scss";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [farmers, setFarmers] = React.useState([]);

  async function getFarmers() {
    const farmerData = await API.graphql(graphqlOperation(queries.listFarmers));
    console.log(farmerData);
    setFarmers(farmerData.data.listFarmers);
  }

  React.useEffect(() => {
    getFarmers();
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
        {farmers.map((farmer) => (
          <div>
            <p>{farmer.farm_name}</p>
            <p>
              {farmer.first_name} {farmer.last_name}
            </p>
            <p>
              Address: {farmer.street_name}, {farmer.zip_code} {farmer.city}
            </p>
          </div>
        ))}
      </div>
      <ProductsOverview />
    </div>
  ) : (
    <Authentication />
  );
}

export default App;
