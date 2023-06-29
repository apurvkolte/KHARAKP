import { GoogleLogin } from "react-google-login";

const clientId = '860003330133-4lo989olsuvjun9hhf1krr6lcm3mb1mu.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log("Login Sucess! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed!", res);
    }

    return (
        <div id="signButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSigned={true}
            />
        </div>
    )
}

export default Login;