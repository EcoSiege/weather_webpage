const start = document.getElementById('submit');
const search = document.getElementById('search');
const searchedCities = document.getElementById('cities');
var lat;
var lon;
var city;
const urlWeather = 'api.openweathermap.org/data/2.5/forecast?lat='
const urlGeocash = 'http://api.openweathermap.org/geo/1.0/direct?q='
const weatherApiKey = '&appid=979baed4769ff26eb4c2d6a4cb12cc90';
const geocashApiKey = '&limit=5&appid=fe28c6dbe1ce362b35e1b5d40fdbcab2';
var urlWeatherApi;
var searchTerms = [];

start.addEventListener('click', async function (event) {
    city = search.value
    searchTerms.push(city)
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

function setStorage() {
    localStorage.setItem('searchTerms', JSON.stringify(searchTerms))
};

async function retrieveStorage() {
    try {
        const response = await localStorage.getItem('searchTerms')
        searchTerms = JSON.parse(response)
        if (!searchTerms.length) { return }
        else {
            searchTerms.forEach(item => {
                var div = document.createElement('div')
                div.innerHTML = item
                searchedCities.appendChild(div)
            });
        }

    } catch (err) {
        console.log(err)
    }


    return searchTerms
};

retrieveStorage();