export const fetchGeoCode = (event) => {

    let eventAddress = `${event.address}, ${event.city}, ${event.state}, ${event.zip}`
    const encodedAddress = encodeURI(eventAddress)

    return $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        method: 'GET'
    })
}