import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";

import Authentication from "./components/organisms/authentication/Authentication";
import Main from "./components/pages/Main";
import "./Styles.scss";

// Import for getting/modifying data from database
import * as dbData from "./components/organisms/databaseconnection/DatabaseConnection";

function App() {
  const [farmers, setFarmers] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();

  async function getFarmers() {
    // Get all farmers
    const farmerData = await dbData.getAllFarmers();

    //console.log(farmerData);
    setFarmers(farmerData);

    // Get one farmer with id
    //const singleFarmer = await dbData.getOneFarmer(1);

    /*
    // Adding new farmer
    const testFarmer = await dbData.addNewFarmer(
      "TestFarm",
      "George",
      "Reginald",
      "Testing alley 4",
      "19400",
      "Hamburg",
      "george@testfarm.com"
    );
    */

    // Deleting farmer
    //const delFarm = await dbData.deleteFarmer(5);
    //console.log(delFarm);

    /*
    // Updating farmer
    const updateFarmer = await dbData.updateFarmer(
      6,
      "Changed Farm name",
      "Maria",
      "Doe",
      "Test street 5",
      "21504",
      "Hamburg",
      "maria@farm.com"
    );
    console.log(updateFarmer);*/
  }

  async function getProducts() {
    // Fetching all product from farmer with id | UNDER CONSTRUCTION
    const productData = await dbData.getProductsByFarmerId(1);

    // Fetching all product
    //const productData = await dbData.getAllProducts();
    //console.log(productData);
    setProducts(productData);
    /*
    // Fetching one product with id
    const singleProduct = await dbData.getOneProduct(1);
    console.log(singleProduct);
    */

    /*
    // Adding new product
    const testProduct = await dbData.addNewProduct(
      "Testproduct4",
      1.5,
      "kg",
      40,
      3,
      "2021-12-22 00:00:00",
      1,
      1
    );
    //console.log(testProduct);
    */

    // Deleting product
    //const delProduct = await dbData.deleteProduct(5);
    //console.log(delProduct);

    /*
    // Updating product
    const updateProduct = await dbData.updateProduct(
      6,
      "Changed testproduct2 name",
      3.9,
      "kg",
      20,
      3,
      "2021-12-22 00:00:00",
      3,
      1
    );
    console.log(updateProduct);
    */
  }

  React.useEffect(() => {
    getFarmers();
    getProducts();
  }, []);

  const handleGetId = (index) => {
    setId(index);
  };

  const showFarmers = () => {
    return (
      <div>
        {farmers.map((farmer) => (
          <div key={farmer.id}>
            <p>
              ID: {farmer.id}, {farmer.farm_name}
            </p>
            <p>
              {farmer.first_name} {farmer.last_name}
            </p>
            <p>
              Address: {farmer.street_name}, {farmer.zip_code} {farmer.city}
            </p>
            <p>********************</p>
          </div>
        ))}
      </div>
    );
  };

  const productlist = () => {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>
              ID: {product.id}, {product.name}
            </p>
            <p>
              {product.price_per_unit} € / {product.unit_value}
            </p>
            <p>
              Stock: {product.stock_quantity} {product.unit_value}, Farmer id:
              {product.farmer_id}, salesbox id: {product.salesbox_id}
            </p>
            <p>********************</p>
          </div>
        ))}
      </div>
    );
  };

  const showProducts = () => {
    return <div></div>;
  };

  return (
    <Authenticator loginMechanisms={["email"]}>
      {({ signOut, user }) => (
        <div className="App">
          <Authentication
            user={user.username}
            email={user.attributes.email}
            farmers={farmers}
            onHandleID={handleGetId}
          />
          <button onClick={signOut}>Sign out</button>
          <Main farmerId={id} />
          <div>{showProducts()}</div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
