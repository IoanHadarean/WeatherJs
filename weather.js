/* global fetch */

class Weather {
    constructor(city, countryCode) {
        this.apiKey = '4c8f9914e188ba211a9ceef14a04b60e';
        this.city = city;
        this.countryCode = countryCode;
    }
    
      // Change weather location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode =  countryCode;
    }

    // Fetch weather from API
    async getWeather(city, countryCode) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);

        const resData = await response.json();

        return resData;
    }
}
