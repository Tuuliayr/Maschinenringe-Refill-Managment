import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {ReactComponent as Home} from "../../../images/icons/store-alt-solid.svg";
import {ReactComponent as Menu} from "../../../images/icons/bars-solid.svg";
import {ReactComponent as Restock} from "../../../images/icons/box-open-solid.svg";
import {ReactComponent as Map} from "../../../images/icons/map-marked-alt-solid.svg";

const Navigation = () => {
  const [location, setLocation] = useState();
  const [home, setHome] = useState("");
  const [settings, setSettings] = useState("");
  const [restock, setRestock] = useState("");
  const [map, setMap] = useState("");


  const loc = useLocation();

  useEffect(() => {
    setLocation(loc.pathname);
  }, [loc.pathname]);

  useEffect(() => {
    if (location === "/") {
      setHome("open");
      setSettings("");
      setRestock("");
      setMap("");
    } else if (location === "/settings") {
      setSettings("open");
      setHome("");
      setRestock("");
      setMap("");
    } else if (location === "/restock") {
      setRestock("open");
      setHome("");
      setSettings("");
      setMap("");
    } else if (location === "/maps") {
      setRestock("");
      setHome("");
      setSettings("");
      setMap("open");
    } else {
      setHome("open");
    }
  }, [location]);

  return (
    <div className="navigation">
      <NavLink to="/" > 
        <Home className={`navigation__icon navigation__icon--${home}`}/>
      </ NavLink>
      <NavLink to="/maps">
        <Map className={`navigation__icon navigation__icon--${map}`} />
      </NavLink>
      <NavLink to="/restock">
        <Restock className={`navigation__icon navigation__icon--${restock}`} />
      </NavLink>
      <NavLink to="/settings">
        <Menu className={`navigation__icon navigation__icon--${settings}`} />
      </NavLink>
      
    </div>
  );
};

export default Navigation;
