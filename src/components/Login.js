```javascript
import React, { useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../services/GoogleAuth';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    access_type: 'offline',
  });

  useEffect(() => {
    signIn();
  }, [signIn]);

  return (
    <div>
      <button onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
```