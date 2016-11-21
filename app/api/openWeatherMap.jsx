var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=24d8080ccc5e16626dbd876d4adfee35';

//24d8080ccc5e16626dbd876d4adfee35

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;

    return axios.get(requestUrl).then(function(res) {
        console.log(res);
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        }
        else {
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error(res.data.message);
      })
  }
}
