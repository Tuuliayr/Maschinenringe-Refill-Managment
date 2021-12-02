import React, { useEffect, useState } from "react";
import { NavLink , useLocation} from "react-router-dom";

import {ReactComponent as Home} from "../../../images/icons/store-alt-solid.svg";
import {ReactComponent as Menu} from "../../../images/icons/bars-solid.svg";

const Navigation = () =>  {
  const [location, setLocation] = useState();
  const [home, setHome] = useState("");
  const [settings, setSettings] = useState("");

  const loc = useLocation();

  useEffect(() => {
    setLocation(loc.pathname)
  }, [loc.pathname]);

  useEffect(() => {
    if(location === "/") {
      setHome("open");
      setSettings("");
    } else if (location === "/settings") {
      setSettings("open");
      setHome("");
    } else {
      setHome("");
    }
  }, [location]);

  return (
    <div className="navigation">
      <NavLink to="/" > 
        <Home className={`navigation__icon navigation__icon--${home}`}/>
      </ NavLink>
      <NavLink to="/settings">
        <Menu className={`navigation__icon navigation__icon--${settings}`} />
      </NavLink>
    </div>
  );
}

export default Navigation;