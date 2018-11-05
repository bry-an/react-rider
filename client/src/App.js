import React, { Component } from "react";
import "./assets/css/skeleton.css"
import "./App.sass";
import GoogleMapContainer from "./Components/GoogleMapContainer/GoogleMapContainer";

class App extends Component {
  render() {
    return (
      <GoogleMapContainer />
    );
  }
}

export default App;
