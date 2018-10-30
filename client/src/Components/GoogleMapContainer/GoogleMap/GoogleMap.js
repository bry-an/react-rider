import React, { Component } from 'react'

const google = window.google

class GoogleMap extends Component {


    initMap = ({ zoom, center }) => {

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