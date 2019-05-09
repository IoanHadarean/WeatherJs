/* global Weather */
/* global UI */
/* global Storage */


// Get stored location data
const weatherLocation = storage.getLocationdata();
console.log(weatherLocation);
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);
// Init ui
const ui = new UI();
// Init storage
const storage = new Storage();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', fetchWeather);

function fetchWeather() {
    weather.getWeather()
        .then(data => {
            ui.inject(data);
        })
        .catch(err => console.log(err));
}

// Get weather change button
let weatherChangeBtn = document.getElementById('weather-change-btn');


// Change location event
weatherChangeBtn.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    
    // Get and display location weather
    fetchWeather();
    
    storage.setLocationData(city, countryCode);
    
    
    // Close Modal
    closeModal('locModal');
});


function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    
    
     // get modal backdrop
     const modalBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove opened modal backdrop
     document.body.removeChild(modalBackdrops[0]);
}
