/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarmer = /* GraphQL */ `
  query GetFarmer($id: Int!) {
    getFarmer(id: $id) {
      id
      login_id
      farm_name
      street_name
      zip_code
      city
      first_name
      last_name
      email
    }
  }
`;
export const listFarmers = /* GraphQL */ `
  query ListFarmers {
    listFarmers {
      id
      login_id
      farm_name
      street_name
      zip_code
      city
      first_name
      last_name
      email
    }
  }
`;
export const getFarmer_salesbox = /* GraphQL */ `
  query GetFarmer_salesbox($salesbox_id: Int!) {
    getFarmer_salesbox(salesbox_id: $salesbox_id) {
      farmer_id
      salesbox_id
    }
  }
`;
export const listFarmer_salesboxs = /* GraphQL */ `
  query ListFarmer_salesboxs {
    listFarmer_salesboxs {
      farmer_id
      salesbox_id
    }
  }
`;
export const getLogin = /* GraphQL */ `
  query GetLogin($farmer_id: Int!) {
    getLogin(farmer_id: $farmer_id) {
      farmer_id
      password
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins {
    listLogins {
      farmer_id
      password
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: Int!) {
    getProduct(id: $id) {
      id
      name
      price_per_unit
      unit_value
      stock_quantity
      low_stock_definition
      expiration_date
      farmer_id
      salesbox_id
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts {
    listProducts {
      id
      name
      price_per_unit
      unit_value
      stock_quantity
      low_stock_definition
      expiration_date
      farmer_id
      salesbox_id
    }
  }
`;
export const listProductsByFarmerId = /* GraphQL */ `
  query ListProductsByFarmerId($farmer_id: Int) {
    listProductsByFarmerId(farmer_id: $farmer_id) {
      id
      name
      price_per_unit
      unit_value
      stock_quantity
      low_stock_definition
      expiration_date
      farmer_id
      salesbox_id
    }
  }
`;
export const listProductsBySalesboxId = /* GraphQL */ `
  query ListProductsBySalesboxId($salesbox_id: Int) {
    listProductsBySalesboxId(salesbox_id: $salesbox_id) {
      id
      name
      price_per_unit
      unit_value
      stock_quantity
      low_stock_definition
      expiration_date
      farmer_id
      salesbox_id
    }
  }
`;
export const getSalesbox = /* GraphQL */ `
  query GetSalesbox($id: Int!) {
    getSalesbox(id: $id) {
      id
      street_address
      zip_code
      city
    }
  }
`;
export const listSalesboxs = /* GraphQL */ `
  query ListSalesboxs {
    listSalesboxs {
      id
      street_address
      zip_code
      city
    }
  }
`;
