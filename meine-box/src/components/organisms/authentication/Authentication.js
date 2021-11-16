import React from 'react';
import { 
  AmplifyAuthenticator, 
  AmplifySignUp, 
  AmplifySignIn, 
  AmplifyForgotPassword, 
  AmplifyAuthContainer 
} from '@aws-amplify/ui-react';

const Authentication = () => {
  return (
      <AmplifyAuthContainer>
        <AmplifyAuthenticator>
          <AmplifySignIn
            headerText="Welcome to Meine Box"
            submitButtonText="Login"
            slot="sign-in"
          />

        <AmplifyForgotPassword
          sendButtonText="Get verification code"
          submitButtonText="Reset password"
          usernameAlias="email"
          slot="forgot-password"
        ></AmplifyForgotPassword>

        <AmplifySignUp
          usernameAlias="email"
          headerText="Create new account for Meine Box"
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" },
          ]}
        />
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
};

export default Authentication;
