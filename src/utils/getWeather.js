const request = require('request')
const { get } = require('request')

getWeather = (city, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d0453d172b4587901ab3fd7ab752295b&query=${city}&units=f`

    request({ url: url, json: true }, (error, response) => {
        callback(response.body.current)
    })
}

module.exports  = getWeather