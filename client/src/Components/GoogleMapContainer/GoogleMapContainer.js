import React, { Component } from 'react'
import GoogleMap from './GoogleMap/GoogleMap'
import RouteEditor from './RouteEditor/RouteEditor'
import WeatherPanel from './WeatherPanel/WeatherPanel'

class GoogleMapContainer extends Component {
    state = {
        mapCenter: {}
    }

    setMapCenter = mapCenter => {
        this.setState({
            mapCenter
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="two columns route">
                        <RouteEditor />
                    </div>
                    <div className="eight columns map">
                        <GoogleMap center={{ lat: 39.73, lng: -105 }} />
                    </div>
                    <div className="two columns weather">
                        <WeatherPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleMapContainer