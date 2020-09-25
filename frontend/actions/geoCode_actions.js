import * as GeoCodeApiUtil from '../util/geoCode_api_util';

export const RECEIVE_GEOCODE = 'RECEIVE_GEOCODE';

const receiveGeoCode = (geoCode, event) => ({
    type: RECEIVE_GEOCODE,
    geoCode,
    event
})

export const requestGeoCode = (event) => dispatch => {

    return (GeoCodeApiUtil.fetchGeoCode(event)
        .then(
            geoCode => dispatch(receiveGeoCode(geoCode, event)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    )
};