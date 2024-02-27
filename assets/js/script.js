const start = $('#submit');
const search = document.getElementById('search');
var lat;
var lon;
var city;
const urlWeather = 'api.openweathermap.org/data/2.5/forecast?lat='
const urlGeocash = 'http://api.openweathermap.org/geo/1.0/direct?q='
const weatherApiKey = '&appid=979baed4769ff26eb4c2d6a4cb12cc90';
const geocashApiKey = '&limit=5&appid=fe28c6dbe1ce362b35e1b5d40fdbcab2';
var urlWeatherApi;

start.on('click', async function (event) {
    city = search.value
    const urlGeocashApi = urlGeocash + city + geocashApiKey
    console.log(urlGeocashApi)
    const geocashResponse = await fetch(urlGeocashApi);
    const geocashData = await geocashResponse.json();

    lat = geocashData[0].lat;
    lon = geocashData[0].lon;
    urlWeatherApi = urlWeather + lat + '&lon=' + lon + weatherApiKey;
    console.log(urlWeatherApi);
    
    const weatherResponse = await fetch(urlWeatherApi);
});


