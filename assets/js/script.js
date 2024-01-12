const start = $('#submit');
const search = $('#search');
let lat = '';
let lon = '';
let city = '';
const urlWeather = 'api.openweathermap.org/data/2.5/forecast?lat={' + lat + '}&lon={' + lon + '}&appid={979baed4769ff26eb4c2d6a4cb12cc90}';
const urlGeocash = 'http://api.openweathermap.org/geo/1.0/direct?q={' + city + '}&limit={5}&appid={979baed4769ff26eb4c2d6a4cb12cc90}';

start.on('click', function (event) {
    event.preventDefault();

    // city = search.val
    console.log(search.form)
    // fetch(urlGeocash)
//     .then(function (response) {
//         return response.json();
//      })
//      .then(function (data) {
//          lat = data.lat;
//          lon = data.lon;
//      });
});


