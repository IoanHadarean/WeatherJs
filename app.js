/* global Weather */
/* global UI */

// Init Weather object

const weather = new Weather('Sibiu', 'ro');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', fetchWeather);

// weather.changeLocation('London', 'uk');


function fetchWeather() {
    weather.getWeather()
        .then(data => {
            ui.inject(data);
        })
        .catch(err => console.log(err));
}
