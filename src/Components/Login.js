import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId = '259200783381-h5nnqnslilen32au2an3qdk328mc3u3j.apps.googleusercontent.com';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onSuccess = ( res ) => {
        //Redirect to profile page
      // console.log('[Login Success] currentUser:', res.profileObj);

    };
  
    const onFailure = (res ) => {
      console.group('[Login failed] res:', res);
    };
  
    return (
      <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop : '100px' }}
        isSignedIn={true}
        />
      </div>
    );
}

export default Login;