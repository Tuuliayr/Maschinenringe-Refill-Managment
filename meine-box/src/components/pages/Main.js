import { Routes, Route } from "react-router-dom";
import Restock from "../molecules/restock/Restock";
import MyBoxes from "../molecules/myboxes/MyBoxes";
import ProductsOverview from "../molecules/overview/ProductsOverview";
import Settings from "../organisms/settings/Settings";
import RestockAllProducts from "../molecules/restock/RestockAllProducts";
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
          path="/restock"
          element={<RestockAllProducts farmerId={farmerId} />}
        />
        <Route
          path="/restock/:boxId"
          element={<Restock farmerId={farmerId} />}
        />
        <Route path="/settings" element={<Settings signOut={signOut} />} />
        <Route path="/maps" element={<Map />} />
      </Routes>
    </div>
  );
}

export default Main;
