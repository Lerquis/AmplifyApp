import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifyProvider } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifyProvider />
    </div>
  );
}

export default withAuthenticator(App);
