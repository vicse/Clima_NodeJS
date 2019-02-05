const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyBzU9PJYEIGvVzkD9gCrced5kPCxN7XQjs`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng

    }

}

module.exports = {
    getLugarLatLng
}