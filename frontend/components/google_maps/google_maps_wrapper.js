import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    // width: '300px',
    // height: '300px',
    // position: 'absolute'
    "borderRadius": "5px"
};

export class MapContainer extends Component {

    componentDidMount(){

        if(this.props.event ){
            this.props.requestGeoCode(this.props.event)
        }

    }

    render() {

        let { event, geoCode } = this.props;

        if(!event){
            return null;
        }

        let geoCodeCoordinates = {
            lat: 37.7749,
            lng: -122.4194
        }


        if(!!geoCode.lat && !!geoCode.lng){
            geoCodeCoordinates.lat = geoCode.lat;
            geoCodeCoordinates.lng = geoCode.lng;
        }
        
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={
                    {
                        lat: geoCodeCoordinates.lat,
                        lng: geoCodeCoordinates.lng
                    }
                }   
            >
            <Marker
                // title={'The marker`s title will appear as a tooltip.'}
                // name={'SOMA'}
                position={{ lat: geoCodeCoordinates.lat, lng: geoCodeCoordinates.lng }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
