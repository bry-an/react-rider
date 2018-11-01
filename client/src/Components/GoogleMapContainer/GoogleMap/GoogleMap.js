import React, { Component } from 'react'
import './GoogleMap.sass'

const google = window.google

class GoogleMap extends Component {

    componentDidMount() {
        this.initMap( { zoom: 12, center: { lat: 39.73, lng: 105 } })
    }


    initMap = ({ zoom, center }) => {
        console.log('zoom', zoom)

        const map = new google.maps.Map(
            document.getElementById('googleMap'), {
                zoom,
                center
            }
        )
    }

    render() {
        return (
            <div id='googleMap'>
            </div>
        )
    }

}

export default GoogleMap