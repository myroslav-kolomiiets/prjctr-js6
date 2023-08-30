import {input, list, msg} from './constants.js';

export class WeatherApp {
    #apiKey;
    #isLoading;

    constructor(apiKey) {
        this.#apiKey = apiKey;
        this.#isLoading = false;
    }

    fetchData = () => {
        let inputVal = input.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${
            inputVal}&appid=${this.#apiKey}&units=metric`;
        this.#isLoading = true;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.#updateDOM(data);
            })
            .catch(() => {
                msg.textContent = 'Invalid city name'
            })
            .finally(() => {
                this.#isLoading = false;
            })
    }

    #updateDOM = (data) => {
        const { main, name, sys, weather } = data;
        const li = document.createElement('li');
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        li.classList.add('city');

        li.innerHTML = `<h2 class="city-name" data-name="${name},${sys.country}">
                              <span>${name}</span>
                              <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                              <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                              <figcaption>${weather[0]["description"]}</figcaption>
                            </figure>`;

        list.appendChild(li);
    }
}
