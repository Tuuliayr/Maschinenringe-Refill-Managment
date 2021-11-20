import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";

export const getAllFarmers = async () => {
  const farmerData = await API.graphql(graphqlOperation(queries.listFarmers));
  return farmerData.data.listFarmers;
};

export const getOneFarmer = async (farmerId) => {
  const farmer = await API.graphql(
    graphqlOperation(queries.getFarmer, { id: farmerId })
  );
  console.log(farmer.data.getFarmer);
  return farmer.data.getFarmer;
};

export const addNewFarmer = async (
  farmName,
  firstName,
  lastName,
  streetAddress,
  zip,
  city,
  email
) => {
  const data = {
    farm_name: farmName,
    first_name: firstName,
    last_name: lastName,
    street_name: streetAddress,
    zip_code: zip,
    city: city,
    email: email,
    /*
    farm_name: "Newton farm",
    first_name: "Maria",
    last_name: "Newton",
    street_name: "Test street 3",
    zip_code: "21504",
    city: "Hamburg",
    email: "maria@testfarm.com",
    */
  };
  const newFarm = await API.graphql(
    graphqlOperation(mutations.createFarmer, { createFarmerInput: data })
  );
  return newFarm.data.createFarmer;
};

export const updateFarmer = async (
  id,
  farmName,
  firstName,
  lastName,
  streetAddress,
  zip,
  city,
  email
) => {
  const updated = {
    id: id,
    farm_name: farmName,
    first_name: firstName,
    last_name: lastName,
    street_name: streetAddress,
    zip_code: zip,
    city: city,
    email: email,
  };
  const updatedFarm = await API.graphql(
    graphqlOperation(mutations.updateFarmer, { updateFarmerInput: updated })
  );
  return updatedFarm.data.updateFarmer;
};

export const deleteFarmer = async (farmerId) => {
  const deletedFarm = await API.graphql(
    graphqlOperation(mutations.deleteFarmer, { id: farmerId })
  );
  return deletedFarm.data.deleteFarmer;
};

export const getAllProducts = async () => {
  const productData = await API.graphql(graphqlOperation(queries.listProducts));
  return productData.data.listProducts;
};

export const getOneProduct = async (productId) => {
  const productData = await API.graphql(
    graphqlOperation(queries.getProduct, { id: productId })
  );
  return productData.data.getProduct;
};

export const addNewProduct = async (
  name,
  price_per_unit,
  unit_value,
  stock_quantity,
  low_stock_definition,
  expiration_date,
  farmer_id,
  salesbox_id
) => {
  const data = {
    name,
    price_per_unit,
    unit_value,
    stock_quantity,
    low_stock_definition,
    expiration_date,
    farmer_id,
    salesbox_id,
  };
  const newProduct = await API.graphql(
    graphqlOperation(mutations.createProduct, { createProductInput: data })
  );
  return newProduct.data.createProduct;
};

export const updateProduct = async (
  id,
  name,
  price_per_unit,
  unit_value,
  stock_quantity,
  low_stock_definition,
  expiration_date,
  farmer_id,
  salesbox_id
) => {
  const updated = {
    id,
    name,
    price_per_unit,
    unit_value,
    stock_quantity,
    low_stock_definition,
    expiration_date,
    farmer_id,
    salesbox_id,
  };
  const updatedFarm = await API.graphql(
    graphqlOperation(mutations.updateProduct, { updateProductInput: updated })
  );
  return updatedFarm.data.updateProduct;
};

export const deleteProduct = async (productId) => {
  const deletedProduct = await API.graphql(
    graphqlOperation(mutations.deleteProduct, { id: productId })
  );
  return deletedProduct.data.deleteProduct;
};
