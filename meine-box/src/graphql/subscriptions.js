/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFarmer = /* GraphQL */ `
  subscription OnCreateFarmer {
    onCreateFarmer {
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
export const onCreateFarmer_salesbox = /* GraphQL */ `
  subscription OnCreateFarmer_salesbox {
    onCreateFarmer_salesbox {
      farmer_id
      salesbox_id
    }
  }
`;
export const onCreateLogin = /* GraphQL */ `
  subscription OnCreateLogin {
    onCreateLogin {
      farmer_id
      password
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onCreateSalesbox = /* GraphQL */ `
  subscription OnCreateSalesbox {
    onCreateSalesbox {
      id
      street_address
      zip_code
      city
    }
  }
`;
