import { GoogleLogout } from "react-google-login";

const clientId = '860003330133-4lo989olsuvjun9hhf1krr6lcm3mb1mu.apps.googleusercontent.com';

function Logout() {

    const onSuccess = () => {
        console.log("Logout Successful.");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />

        </div>
    )
}

export default Logout;