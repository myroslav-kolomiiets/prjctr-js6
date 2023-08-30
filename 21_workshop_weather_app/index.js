import {WeatherApp} from './weatherApp.js';
import {form, apiKey} from './constants.js';

(() => {
    const weatherApp = new WeatherApp(apiKey);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // some weatherApp method
        weatherApp.fetchData();

        form.reset();
        input.focus();
    })
})()
