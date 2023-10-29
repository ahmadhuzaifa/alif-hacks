```javascript
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = 'YOUR_CLIENT_ID'; // Replace with your client ID

export const GoogleAuth = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Here you can handle the response from Google and use it in your application
  }

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
```