import React from 'react';

// Import for getting/modifying data from database
import * as dbData from "../databaseconnection/DatabaseConnection";

const Authentication = ({user,email,farmers, onHandleID}) => {

  React.useEffect(() => {
    const handleRegistration = async () => {
      await dbData.addNewFarmer(
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
      onHandleID(farmers[farmers.findIndex((farmer) => farmer.login_id === user)].id);
    } else if (farmers.length !== 0) {
      handleRegistration();
    }
  }, [farmers, email, user, onHandleID]);

  return (
    <div className='Authentication'></div>
  );
};

export default Authentication;
