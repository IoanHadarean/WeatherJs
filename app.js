/* global Weather */

// Init Weather object

const weather = new Weather('London', 'uk');


weather.getWeather()
    .then(data =>  {
        console.log(data);
    })
    .catch(err => console.log(err));