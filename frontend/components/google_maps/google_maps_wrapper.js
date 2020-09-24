import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    // width: '300px',
    // height: '300px',
    // position: 'absolute'
    "borderRadius": "5px"
};

export class MapContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         lat: null,
    //         long: null
    //     }
    // }

    // componentDidMount(){
    //     if(!this.props.event){break}

    //     let [latitude, setLatitude] = React.useState(-33.7560119)
    //     let [longitude, setLongitude] = React.useState(150.6038367)
    //     let [address, setAddress] = React.useState('')

    //     let 
    //     const encodedAddress = encodeURI(address)

    //     fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
    //             "x-rapidapi-key": process.env.RAPIDAPI_KEY
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             setLatitude(response.lat)
    //             setLongitude(response.long)
    //         })
    //         .catch(err => console.log(err))
    // }
    // }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 37.7749,
                        lng: -122.4194
                    }
                }   
            >
            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{ lat: 37.778519, lng: -122.405640 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);