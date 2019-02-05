const axios = require('axios');


let getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=339c19cbe14f45b84d96e72e4d1e567b`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}