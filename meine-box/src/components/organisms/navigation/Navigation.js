import React, { useEffect, useState } from "react";
import { NavLink, useParams , useLocation} from "react-router-dom";

import {ReactComponent as Home} from "../../../images/icons/store-alt-solid.svg";
import {ReactComponent as Menu} from "../../../images/icons/bars-solid.svg";
import {ReactComponent as Restock} from "../../../images/icons/box-open-solid.svg";

const Navigation = () =>  {
  const [location, setLocation] = useState();
  const [home, setHome] = useState("");
  const [settings, setSettings] = useState("");
  const [restock, setRestock] = useState("");

  const loc = useLocation();

  useEffect(() => {
    setLocation(loc.pathname)
  });

  useEffect(() => {
    if(location === "/") {
      setHome("open");
      setSettings("");
    } else if (location === "/settings") {
      setSettings("open");
      setHome("");
      setRestock("");
    } else if (location === "/restock") {
      setRestock("open");
      setHome("");
      setSettings("");
    } else {
      setHome("open");
    }
  }, [location]);

  return (
    <div className="navigation">
      <NavLink to="/" > 
        <Home className={`navigation__icon navigation__icon--${home}`}/>
      </ NavLink>
      <NavLink to="/restock">
        <Restock className={`navigation__icon navigation__icon--${restock}`} />
      </NavLink>
      <NavLink to="/settings">
        <Menu className={`navigation__icon navigation__icon--${settings}`} />
      </NavLink>
    </div>
  );
}

export default Navigation;