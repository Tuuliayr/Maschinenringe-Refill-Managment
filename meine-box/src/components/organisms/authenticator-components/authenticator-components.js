import React, { useState } from 'react';
import { useTheme, View, Heading, Button } from "@aws-amplify/ui-react";
import logo from '../../../Logo.png';

export const authenticatorComponents = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <img src={logo} className="auth-logo" alt="Meine box logo" />
      </View>
    );
  },
  
  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const [showPolicy, setShowPolicy] = useState(false);
      const showPrivacyPolicy = (boolean) => {
        setShowPolicy(boolean)
      }

      return (
        <View textAlign="center">
          <p className="sign-up__accept-policy">By signing up you'll accept our </p>
          <Button
            fontWeight="normal"
            onClick={() => showPrivacyPolicy(true)}
            size="small"
            variation="link"
          >
            Terms and Privacy Policy
          </Button>
          {showPolicy && (
            <div className="sign-up-policy">
              <h2 className="sign-up-policy__title">Meine Box Privacy Policy</h2>
              <p className="sign-up-policy__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <a 
                className="sign-up-policy__link" 
                href="https://dsgvo-gesetz.de/" 
                alt="Link to more detailed privacy policy"
                target="_black"
              > Read further</a>
              <button className="sign-up-policy__close-button" onClick={() => showPrivacyPolicy(false)} >close</button>
            </div>
          )}
        </View>
      );
    },
  },
}