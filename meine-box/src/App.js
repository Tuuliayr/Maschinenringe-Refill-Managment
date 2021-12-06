import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import { authenticatorComponents } from "./components/organisms/authenticator-components/authenticator-components";
import Main from "./components/pages/Main";
import "./Styles.scss";

// Import for getting/modifying data from database
import * as dbData from "./components/organisms/databaseconnection/DatabaseConnection";
import Navigation from "./components/organisms/navigation/Navigation";

function App() {
  const [farmers, setFarmers] = useState([]);
  const [id, setId] = useState();

  async function getFarmers() {
    // Get all farmers
    const farmerData = await dbData.getAllFarmers();
    setFarmers(farmerData);
  }

  React.useEffect(() => {
    getFarmers();
  }, []);

  const handleGetId = (index) => {
    setId(index);
  };

  return (
    <Authenticator
      components={authenticatorComponents}
      loginMechanisms={["email"]}
    >
      {({ signOut, user }) => (
        <div className="App">
          <Authentication
            user={user.username}
            email={user.attributes.email}
            farmers={farmers}
            onHandleID={handleGetId}
          />
          <Main farmerId={id} signOut={signOut} />
          <Navigation />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
