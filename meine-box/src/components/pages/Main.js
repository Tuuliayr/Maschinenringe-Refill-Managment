import { Routes, Route } from "react-router-dom";
import Restock from "../molecules/restock/Restock";
import MyBoxes from "../molecules/myboxes/MyBoxes";
import ProductsOverview from "../molecules/overview/ProductsOverview";

function Main() {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<MyBoxes />} />
          <Route path="/productsoverview" element={<ProductsOverview />} />
          <Route path="/restock" element={<Restock />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
