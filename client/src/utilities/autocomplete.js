const google = window.google

const autoComplete = inputDiv => {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById(inputDiv))
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
            return place
        }
    })
}

module.exports = autoComplete