import React, { Component } from "react";
import "./GoogleMap.sass";

const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    this.initMap({ zoom: 12, center: { lat: 39.73, lng: -105 } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.center !== this.props.center) {
      const options = {
        zoom: 12,
        center: nextProps.center
      }
      this.initMap(options)
    }
  }

  initMap = ({ zoom, center }) => {

    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom,
      center
    });
  };

  render() {
    return (
      <div id="map-wrapper">
        <div id="googleMap" />
      </div>
    );
  }
}

export default GoogleMap;
