import { Routes, Route } from "react-router-dom";
import Restock from "../molecules/restock/Restock";
import MyBoxes from "../molecules/myboxes/MyBoxes";
import ProductsOverview from "../molecules/overview/ProductsOverview";
import Settings from "../organisms/settings/Settings";
import Map from "../organisms/maps/Map";

function Main({ farmerId, signOut }) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MyBoxes farmerId={farmerId} />} />
        <Route
          path="/productsoverview/:boxId"
          element={<ProductsOverview farmerId={farmerId} />}
        />
        <Route
          path="/restock/:boxId"
          element={<Restock farmerId={farmerId} />}
        />
        <Route path="/settings" element={<Settings signOut={signOut} />} />
        <Route path="/maps" element={<Map farmerId={farmerId}/>} />
      </Routes>
    </div>
  );
}

export default Main;
