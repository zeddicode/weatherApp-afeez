document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'your_api_key'; 
    const getWeatherBtn = document.querySelector('#getWeatherBtn');
    const cityInput = document.querySelector('#cityInput');
    const locationDisplay = document.querySelector('#location');
    const temperatureDisplay = document.querySelector('#temperature');
    const descriptionDisplay = document.querySelector('#description');

    getWeatherBtn.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        }
    });

    async function getWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        if (data.cod === 200) {
            const { name, main, weather } = data;
            locationDisplay.textContent = `Location: ${name}`;
            temperatureDisplay.textContent = `Temperature: ${main.temp} °C`;
            descriptionDisplay.textContent = `Description: ${weather[0].description}`;
        } else {
            locationDisplay.textContent = 'City not found';
            temperatureDisplay.textContent = '';
            descriptionDisplay.textContent = '';
        } 
    }
});
