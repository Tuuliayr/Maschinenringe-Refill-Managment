import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";

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
