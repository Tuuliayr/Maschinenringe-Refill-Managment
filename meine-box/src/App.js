import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import Main from "./components/pages/Main";
import "./Styles.scss";

// Import for getting/modifying data from database
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
    /*
    // Adding new farmer
    const testFarmer = await dbData.addNewFarmer(
      "TestFarm",
      "George",
      "Reginald",
      "Testing alley 4",
      "19400",
      "Hamburg",
      "george@testfarm.com"
    );
    */
    // Deleting farmer
    //const delFarm = await dbData.deleteFarmer(5);
    //console.log(delFarm);
    /*
    // Updating farmer
    const updateFarmer = await dbData.updateFarmer(
      6,
      "Changed Farm name",
      "Maria",
      "Doe",
      "Test street 5",
      "21504",
      "Hamburg",
      "maria@farm.com"
    );
    console.log(updateFarmer);*/
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
      <Main />
      <div>{showFarmers()}</div>
    </div>
  ) : (
    <Authentication />
  );
}

export default App;
