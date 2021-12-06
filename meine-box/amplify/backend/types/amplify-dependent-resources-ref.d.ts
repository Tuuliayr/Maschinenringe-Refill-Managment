export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "MeineBox": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "meinebox": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "geo": {
        "muasMap": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        }
    }
}