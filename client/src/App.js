import React, { Component } from "react";
import "./assets/css/skeleton.css"
import "./App.sass";
import GoogleMapContainer from "./Components/GoogleMapContainer/GoogleMapContainer";
import RouteEditor from "./Components/RouteEditor/RouteEditor";
import WeatherPanel from "./Components/WeatherPanel/WeatherPanel";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="two columns">
            <RouteEditor />
          </div>
          <div className="eight columns">
            <GoogleMapContainer />
          </div>
          <div className="two columns">
            <WeatherPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
