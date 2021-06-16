const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.aerisapi.com/conditions/' + latitude +','+ longitude + '?format=json&plimit=1&filter=1min&client_id=fTbUso83EyB5CXASHKyJn&client_secret=A0a3eKN7SAUBRG3tXL8SaKbGjnJO7idXVsCUajt6'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                response.body.response[0].periods[0].weather  +'. The temperature is ' + response.body.response[0].periods[0].tempC + ' degrees and the humidity ' + response.body.response[0].periods[0].humidity )
        }
    })
}

module.exports = forecast
