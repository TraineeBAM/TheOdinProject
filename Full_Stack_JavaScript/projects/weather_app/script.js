// Function to get the location URL based on user input
function getLocation() {
    let userInput = document.getElementById('userInput').value;
    let apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=c20fdb68f008452da9a54743243001&q=';

    if (userInput === null || userInput.trim() === '') {
        return apiUrl + 'Canberra' + '&days=3&aqi=yes&alerts=no';
    } else {
        return apiUrl + encodeURIComponent(userInput.trim()) + '&days=3&aqi=yes&alerts=no';
    }
}

// Async function to fetch weather data
async function getWeather() {
    try {
        const response = await fetch(getLocation(), { mode: 'cors' });
        const data = await response.json();
        console.log(data);
        console.log(data.location.name);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the getWeather function
getWeather();

let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async (e) => {
    const locationUrl = getLocation();
    await getWeather(locationUrl);
})
