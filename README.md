# Maschinenringe Refill Management

## About the project

Meine Box app is a refill management solution for farmers who want to sell their products with [Maschinenringe](https://www.maschinenring.de/) salesboxes. The app shows current real-time stock situation of the products that have been placed into the salesboxes and the farmer gets notification when the stock levels are low. With having real-time data of current stock levels the farmer knows exactly when to ship refills to the salesbox.

### Link to AWS Amplify app

Staging environment: https://main.d22i10tvsljs2t.amplifyapp.com/

### Built with

Coded with JavaScript, the main framework being [React.js](https://reactjs.org/) for frontend development. The reasoning for choosing React is the client's specification to be able to use the product both on mobile and desktop. 

Deployed with [AWS Amplify](https://aws.amazon.com/amplify/).

### Libraries

The product is using amplify auth and geo for authentication and map features which are using [@aws-amplify/ui-react](https://www.npmjs.com/package/@aws-amplify/ui-react), [@maplibre/maplibre-gl-geocoder](https://github.com/maplibre/maplibre-gl-geocoder), aws-amplify and maplibre-gl libraries. 

Other libraries include [react-router-dom](https://www.npmjs.com/package/react-router-dom) for navigation, [react-modal](https://www.npmjs.com/package/react-modal) for overlay components and [react-native-localize](https://www.npmjs.com/package/react-native-localize) for formatting.

Styling of the product is made with CSS using SASS solutions. Breakpoints are used for the app adapt to the screen width but everything has been coded mobile first. 

The database that we use is an [AWS serverless Aurora MySQL](https://aws.amazon.com/rds/aurora) relational database. Backend solution is built with [Amplify CLI](https://docs.amplify.aws/cli/) using the automatic GraphQL API creation tool that connects the serverless Aurora database to be used as a datasource by the app. The authentication functionality of Amplify stores data of registered users to [DynamoDB](https://aws.amazon.com/dynamodb/). 



