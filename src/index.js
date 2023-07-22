import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="375163155195-4t7vo0dmc2cvp8snm7ju0dohq1qq7f9q.apps.googleusercontent.com">
      {" "}
      <App />{" "}
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);





