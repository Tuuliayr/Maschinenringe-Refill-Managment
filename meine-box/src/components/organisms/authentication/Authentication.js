import React from 'react';

// Import for getting/modifying data from database
import * as dbData from "../databaseconnection/DatabaseConnection";

const Authentication = ({user,email,farmers}) => {

  React.useEffect(() => {
    const handleRegistration = async () => {
      const testFarmer = await dbData.addNewFarmer(
        user,
        "",
        "",
        "",
        "",
        "",
        "",
        email
      );
    }
    if(farmers.some(farmer => farmer.login_id === user)) {
      console.log("User found");
    } else if (farmers.length !== 0) {
      handleRegistration();
    }

  }, [farmers]);

  return (
    <div className='Authentication'></div>
  );
};

export default Authentication;
