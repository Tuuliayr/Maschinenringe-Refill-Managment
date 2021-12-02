import React from "react";
import logo from "../../../Logo.png"

const Settings = ({signOut}) => {
  return (
    <div className="settings">
      <img 
        className="settings__logo"
        src={logo} 
        alt="Meine Box Logo"/>
        <h5 className="settings__title" >Meine Box | Maschinenring</h5>
        <button onClick={signOut}>Sign out</button>

    </div>
  );
}

export default Settings;