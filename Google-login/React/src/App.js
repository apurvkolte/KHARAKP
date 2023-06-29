import logo from './logo.svg';
import './App.css';
import { gapi } from 'gapi-script';

import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import { useEffect } from 'react';
const clientId = '860003330133-4lo989olsuvjun9hhf1krr6lcm3mb1mu.apps.googleusercontent.com';


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientId,
        scope: ""
      })
    };
    gapi.load("client:auth2", start)
  })

  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
