import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    // width: '300px',
    // height: '300px',
    // position: 'absolute'
    "borderRadius": "5px"
};

export class MapContainer extends Component {
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