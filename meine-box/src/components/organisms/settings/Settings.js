import React from "react";
import logo from "../../../Logo.png"

const Settings = () => {
  return (
    <div className="settings">
      <img 
        className="settings__logo"
        src={logo} 
        aria-hidden="true" 
        role="presentation"/>
        <h5 className="settings__title" >Meine Box | Maschinenring</h5>
    </div>
  );
}

export default Settings;