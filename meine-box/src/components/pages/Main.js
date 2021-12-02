import { Routes, Route } from "react-router-dom";
import Restock from "../molecules/restock/Restock";
import MyBoxes from "../molecules/myboxes/MyBoxes";
import ProductsOverview from "../molecules/overview/ProductsOverview";
import Settings from "../organisms/settings/Settings";

function Main({farmerId, signOut}) {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<MyBoxes farmerId={farmerId} />} />
          <Route path="/productsoverview/:boxId" element={<ProductsOverview farmerId={farmerId}/>} />
          <Route path="/restock" element={<Restock farmerId={farmerId}/>} />
          <Route path="/settings" element={<Settings signOut={signOut} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
