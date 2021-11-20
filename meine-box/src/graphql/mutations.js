/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteFarmer = /* GraphQL */ `
  mutation DeleteFarmer($id: Int!) {
    deleteFarmer(id: $id) {
      id
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
export const createFarmer = /* GraphQL */ `
  mutation CreateFarmer($createFarmerInput: CreateFarmerInput!) {
    createFarmer(createFarmerInput: $createFarmerInput) {
      id
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
export const updateFarmer = /* GraphQL */ `
  mutation UpdateFarmer($updateFarmerInput: UpdateFarmerInput!) {
    updateFarmer(updateFarmerInput: $updateFarmerInput) {
      id
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
export const deleteFarmer_salesbox = /* GraphQL */ `
  mutation DeleteFarmer_salesbox($salesbox_id: Int!) {
    deleteFarmer_salesbox(salesbox_id: $salesbox_id) {
      farmer_id
      salesbox_id
    }
  }
`;
export const createFarmer_salesbox = /* GraphQL */ `
  mutation CreateFarmer_salesbox(
    $createFarmer_salesboxInput: CreateFarmer_salesboxInput!
  ) {
    createFarmer_salesbox(
      createFarmer_salesboxInput: $createFarmer_salesboxInput
    ) {
      farmer_id
      salesbox_id
    }
  }
`;
export const updateFarmer_salesbox = /* GraphQL */ `
  mutation UpdateFarmer_salesbox(
    $updateFarmer_salesboxInput: UpdateFarmer_salesboxInput!
  ) {
    updateFarmer_salesbox(
      updateFarmer_salesboxInput: $updateFarmer_salesboxInput
    ) {
      farmer_id
      salesbox_id
    }
  }
`;
export const deleteLogin = /* GraphQL */ `
  mutation DeleteLogin($farmer_id: Int!) {
    deleteLogin(farmer_id: $farmer_id) {
      farmer_id
      password
    }
  }
`;
export const createLogin = /* GraphQL */ `
  mutation CreateLogin($createLoginInput: CreateLoginInput!) {
    createLogin(createLoginInput: $createLoginInput) {
      farmer_id
      password
    }
  }
`;
export const updateLogin = /* GraphQL */ `
  mutation UpdateLogin($updateLoginInput: UpdateLoginInput!) {
    updateLogin(updateLoginInput: $updateLoginInput) {
      farmer_id
      password
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
    updateProduct(updateProductInput: $updateProductInput) {
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
export const deleteSalesbox = /* GraphQL */ `
  mutation DeleteSalesbox($id: Int!) {
    deleteSalesbox(id: $id) {
      id
      street_address
      zip_code
      city
    }
  }
`;
export const createSalesbox = /* GraphQL */ `
  mutation CreateSalesbox($createSalesboxInput: CreateSalesboxInput!) {
    createSalesbox(createSalesboxInput: $createSalesboxInput) {
      id
      street_address
      zip_code
      city
    }
  }
`;
export const updateSalesbox = /* GraphQL */ `
  mutation UpdateSalesbox($updateSalesboxInput: UpdateSalesboxInput!) {
    updateSalesbox(updateSalesboxInput: $updateSalesboxInput) {
      id
      street_address
      zip_code
      city
    }
  }
`;
