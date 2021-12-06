import React, { useEffect } from "react";
import Button from "../../base/buttons/ButtonBase";
import logo from "../../../Logo.png"

const Settings = ({signOut}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="settings">
      <img 
        className="settings__logo"
        src={logo} 
        alt="Meine Box Logo"/>
        <h5 className="settings__title" >Meine Box | Maschinenring</h5>
        <Button className="button button__logout" onClick={signOut}>Sign out</Button>

    </div>
  );
}

export default Settings;