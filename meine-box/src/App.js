import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import ProductsOverview from "./components/molecules/overview/ProductsOverview";
import "./Styles.scss";

// Import for getting data from database
import * as dbData from "./components/organisms/databaseconnection/DatabaseConnection";

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [farmers, setFarmers] = React.useState([]);

  async function getFarmers() {
    const farmerData = await dbData.getAllFarmers();
    //console.log(farmerData);
    setFarmers(farmerData);
    //const singleFarmer = await dbData.getOneFarmer(1);
    /*const testFarmer = await dbData.addNewFarmer(
      "TestFarm",
      "George",
      "Reginald",
      "Testing alley 4",
      "19400",
      "Hamburg",
      "george@testfarm.com"
    );
    */
    //const delFarm = await dbData.deleteFarmer(5);
    //console.log(delFarm);
  }

  React.useEffect(() => {
    getFarmers();
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  const showFarmers = () => {
    return (
      <div>
        {farmers.map((farmer) => (
          <div>
            <p>
              ID: {farmer.id}, {farmer.farm_name}
            </p>
            <p>
              {farmer.first_name} {farmer.last_name}
            </p>
            <p>
              Address: {farmer.street_name}, {farmer.zip_code} {farmer.city}
            </p>
            <p>********************</p>
          </div>
        ))}
      </div>
    );
  };

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      <header className="App-header">
        <p>Welcome to Meine Box. This is our test branch!</p>
      </header>
      <div>{showFarmers()}</div>
      <ProductsOverview />
    </div>
  ) : (
    <Authentication />
  );
}

export default App;
