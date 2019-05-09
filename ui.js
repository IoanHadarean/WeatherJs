class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-desc');
        this.string = document.getElementById('weather-string');
        this.icon = document.getElementById('weather-icon');
        this.details = document.getElementById('weather-details');
        this.humidity = document.getElementById('weather-humidity');
        this.visibility = document.getElementById('weather-visibility');
        this.pressure = document.getElementById('weather-pressure');
        this.wind = document.getElementById('weather-wind');
    }
    
    inject(results) {
        this.location.textContent =  results.name + ", " + results.sys.country;
        this.desc.textContent = results.weather[0].description;
        this.string.textContent = (results.main.temp - 273.25).toFixed(2) + "°C";
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${results.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${results.main.humidity}`;
        this.pressure.textContent = `Pressure: ${results.main.pressure}`;
        this.visibility.textContent = `Visibility: ${results.visibility}`;
        this.wind.textContent = `Wind speed: ${results.wind.speed}`;
    }
}