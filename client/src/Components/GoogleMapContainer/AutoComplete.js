import React from 'react'

const google = window.google

const AutoComplete = props => {
    console.log('div', document.getElementById('location-entry'))
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById(props.inputDiv))
    autocomplete.setFields(['geometry'])
    const infowindow = new google.maps.InfoWindow()
    autocomplete.addListener('place_changed', () => {
        infowindow.close()
        const placeObj = autocomplete.getPlace()
        if (placeObj.geometry) {
            const placeGoogle = placeObj.geometry.location
            const place = {
                lat: placeGoogle.lat(),
                lng: placeGoogle.lng()
            }
            props.setMapCenter(place)
        }
    })
    return null
}

export default AutoComplete 
