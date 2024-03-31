// app.js
const fetchAirQuality = require("/Users/haji/fanie_mae/script.js"); // Adjust the path as needed

// Example usage:
// script.js
// Assuming you've already loaded the fetchAirQuality function from api.js

// Example usage:
const myToken = process.env.API_KEY; // Replace with your actual token
const cityName = 'shanghai'; // Replace with the desired city name

// Fetch air quality data
const shanghaiData = await fetchAirQuality(cityName);

// Create HTML elements dynamically
const container = document.getElementById('data-container');

// Example: Display AQI
const aqiParagraph = document.createElement('p');
aqiParagraph.textContent = `AQI for ${cityName}: ${shanghaiData.aqi}`;
container.appendChild(aqiParagraph);

// Example: Display pollutant levels
const pollutantsList = document.createElement('ul');
for (const pollutant in shanghaiData.iaqi) {
    const listItem = document.createElement('li');
    listItem.textContent = `${pollutant}: ${shanghaiData.iaqi[pollutant].v}`;
    pollutantsList.appendChild(listItem);
}
container.appendChild(pollutantsList);

