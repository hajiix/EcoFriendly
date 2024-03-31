// api.js (separate file)
require('dotenv').config();
const token = process.env.API_KEY

async function fetchAirQuality(cityName) {
  const apiUrl = `http://api.waqi.info/feed/${cityName}/?token=${token}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Process the data as needed (e.g., extract AQI, pollutant levels)
    return data; // Return the relevant data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}

// Example usage:

const shanghaiData = await fetchAirQuality('shanghai');
console.log(shanghaiData); // Process the data further as needed
