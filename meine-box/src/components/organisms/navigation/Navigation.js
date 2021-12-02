import React, { useEffect, useState } from "react";
import { NavLink, useParams , useLocation} from "react-router-dom";

import {ReactComponent as Home} from "../../../images/icons/store-alt-solid.svg";
import {ReactComponent as Menu} from "../../../images/icons/bars-solid.svg";

const Navigation = () =>  {
  const [location, setLocation] = useState();
  const [home, setHome] = useState("");

  const loc = useLocation();
    console.log(loc.pathname);

  useEffect(() => {
    setLocation(loc.pathname)
  });

  useEffect(() => {
    if(location === "/") {
      setHome("open");
    } else {
      setHome("");
    }
  }, [location]);

  return (
    <div className="navigation">
      <NavLink to="/" > 
        <Home className={`navigation__icon navigation__icon--${home}`}/>
      </ NavLink>
      <NavLink to="/">
        <Menu className={"navigation__icon navigation__icon--burger"} />
      </NavLink>
    </div>
  );
}

export default Navigation;