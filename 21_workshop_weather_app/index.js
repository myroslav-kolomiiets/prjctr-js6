const form = document.querySelector('form');
const input = document.querySelector('#input');
const list = document.querySelector('.cities');
const msg = document.querySelector('.msg');

const apiKey = 'fa734fca65e6be0d33c7b3cda1f1d315';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;


            const li = document.createElement('li');
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
        })
        .catch(() => {
            msg.textContent = 'Invalid city name'
        })
    form.reset();
    input.focus();
})
