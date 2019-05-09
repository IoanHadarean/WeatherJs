/* global Weather */

// Init Weather object

const weather = new Weather('Sibiu', 'ro');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', fetchWeather);

// weather.changeLocation('London', 'uk');


function fetchWeather() {
    weather.getWeather()
        .then(data => {
            ui.inject(results);
        })
        .catch(err => console.log(err));
}
