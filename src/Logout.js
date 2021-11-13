import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '259200783381-h5nnqnslilen32au2an3qdk328mc3u3j.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout Successful');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                ></GoogleLogout>
        </div>
    );
}

export default Logout;