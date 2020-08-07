import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/<CLIENT_ID>',
};

const Uri = makeRedirectUri({ useProxy: false });
console.log(Uri);

export default function Login() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1f326ae427ac57cff355',
      scopes: ['identity'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'cheatsheetapp://redirect',
      }),
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.warn(code);
    }
  }, [response]);

  return (
    <SafeAreaView>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync({ Uri });
        }}
      />
    </SafeAreaView>
  );
}

// import * as React from 'react';
// import { FontAwesome as Icon } from '@expo/vector-icons';

// export default class GithubButton extends React.PureComponent {
//   render() {
//     return (
//       <Icon.Button
//         name="github"
//         color="black"
//         backgroundColor="transparent"
//         onPress={this.props.onPress}
//       >
//         Sign In with Github
//       </Icon.Button>
//     );
//   }
// }
