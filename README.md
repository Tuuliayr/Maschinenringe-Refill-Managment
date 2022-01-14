# <img src="https://user-images.githubusercontent.com/70134583/149548858-1aaf6504-3d82-4180-9f85-bd7c01db84c0.png" alt="alt text" width="5%" height="5%"> Maschinenringe Refill Management

## About the project

Meine Box app is a refill management solution for farmers who want to sell their products with [Maschinenringe](https://www.maschinenring.de/) salesboxes. The app shows current real-time stock situation of the products that have been placed into the salesboxes and the farmer can get a notification when the stock levels are low. With having real-time data of current stock levels the farmer knows exactly when to ship refills to the salesbox.

### Link to AWS Amplify app

Staging environment: https://main.d22i10tvsljs2t.amplifyapp.com/

### Built with

Coded with JavaScript, the main framework being [React.js](https://reactjs.org/) for frontend development. The reasoning for choosing React is the client's specification to be able to use the product both on mobile and desktop. 

Deployed with [AWS Amplify](https://aws.amazon.com/amplify/).

### Libraries

The product is using amplify auth and geo for authentication and map features which are using [@aws-amplify/ui-react](https://www.npmjs.com/package/@aws-amplify/ui-react), [@maplibre/maplibre-gl-geocoder](https://github.com/maplibre/maplibre-gl-geocoder), aws-amplify and maplibre-gl libraries. 

Other libraries include [react-router-dom](https://www.npmjs.com/package/react-router-dom) for navigation, [react-modal](https://www.npmjs.com/package/react-modal) for overlay components and [react-native-localize](https://www.npmjs.com/package/react-native-localize) for formatting.

Styling of the product is made with CSS using SASS solutions. Breakpoints are used for the app adapt to the screen width but everything has been coded mobile first. 

The database that we use is an [AWS serverless Aurora MySQL](https://aws.amazon.com/rds/aurora) relational database. Backend solution is built with [Amplify CLI](https://docs.amplify.aws/cli/) using the automatic [GraphQL API](https://aws.amazon.com/graphql/) creation tool that connects the serverless Aurora database to be used as a datasource by the app. The authentication functionality of Amplify stores data of registered users to [DynamoDB](https://aws.amazon.com/dynamodb/). 

## Usage

All the boxes of the currently logged in farmer   |    Adding a new product to a box                 |    Previously empty Box 4 becomes visible
:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:
<img src="https://user-images.githubusercontent.com/70134583/149537931-7005b0b2-a317-4cc4-bc7e-c007c6b4ae0f.jpg" alt="alt text" width="100%" height="100%"> | <img src="https://user-images.githubusercontent.com/70134583/149537974-42783e8c-0a50-4708-af94-1504c8814642.jpg" alt="alt text" width="100%" height="100%"> | <img src="https://user-images.githubusercontent.com/70134583/149537947-305e588b-6dae-4b76-a470-5e28594817ab.jpg" alt="alt text" width="100%" height="100%">

By clicking a box the farmer is directed to a another page which gives an overview of all the products that are inside the box, both the farmer’s own products and other farmers’                              |    In the restock view farmers can edit or delete their own products and add new ones. 
:-------------------------------------------------------:|:-------------------------------------------------------:
<img src="https://user-images.githubusercontent.com/70134583/149538007-191b6496-00a0-4aa0-aac2-2b7be663a622.jpg" alt="alt text" width="65%" height="65%"> | <img src="https://user-images.githubusercontent.com/70134583/149538171-1fe72769-4463-4d6e-be35-dff1a29a680f.jpg" alt="alt text" width="65%" height="65%">

Adding new products from inside the box. Another box number can't be selected here.          |    Editing products                                     
:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------:
<img src="https://user-images.githubusercontent.com/70134583/149537991-3b0f6bd5-091d-488a-8e2a-e8124cec3114.jpg" alt="alt text" width="65%" height="65%"> | <img src="https://user-images.githubusercontent.com/70134583/149538026-07fbecfb-d070-4bba-b226-8e539059abb1.jpg" alt="alt text" width="65%" height="65%">

Map view shows the locations of the boxes.               |    The farmer can click the location pins to get information                                    
:-------------------------------------------------------:|:-------------------------------------------------------:
<img src="https://user-images.githubusercontent.com/70134583/149538081-0ae6d8cd-0699-442a-84b1-5434febb3742.jpg" alt="alt text" width="65%" height="65%"> | <img src="https://user-images.githubusercontent.com/70134583/149538093-5348b6b7-a3fa-401f-bf53-a7d397e29e9e.jpg" alt="alt text" width="65%" height="65%">

### :warning:Notifications were not implemented, only the design.

Simple notifications                                     |    Customizable notifications                                     
:-------------------------------------------------------:|:-------------------------------------------------------:
<img src="https://user-images.githubusercontent.com/70134583/149538130-0a5447dd-1ef2-4d78-831d-d2d2d79d8596.jpg" alt="alt text" width="65%" height="65%"> | <img src="https://user-images.githubusercontent.com/70134583/149538117-94bbec18-dc2c-440d-86e0-21e2d5a16b0e.jpg" alt="alt text" width="65%" height="65%">
