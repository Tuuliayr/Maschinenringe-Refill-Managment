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

export const deleteFarmer = async (farmerId) => {
  const deletedFarm = await API.graphql(
    graphqlOperation(mutations.deleteFarmer, { id: farmerId })
  );
  return deletedFarm.data.deleteFarmer;
};
