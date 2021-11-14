import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '259200783381-h5nnqnslilen32au2an3qdk328mc3u3j.apps.googleusercontent.com';

function Login() {
    const onSuccess = ( res ) => {
      console.log('[Login Success] currentUser:', res.profileObj);
      localStorage.setItem('name', res.profileObj.name);
      localStorage.setItem('price', '$156 Raised');
      localStorage.setItem('helped', '13 Animals Helped');
    };

    const onFailure = (res ) => {
      console.log('[Login failed] res:', res);
    };

    return (
      <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    );
}

export default Login;