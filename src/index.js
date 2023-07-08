import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ndgg0zk7mqgk4vjr.us.auth0.com"
    clientId="T0cWou1aRBFApU5XjWUP20QxUmqGecd4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
 </Auth0Provider>
  
);
