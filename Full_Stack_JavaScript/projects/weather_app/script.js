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
        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update HTML weather data
function updateWeatherUI(data){
    let city = data.location.name;
    let country = data.location.country;
    let localTime = data.location.localtime;
    let lat = data.location.lat;
    let lon = data.location.lon;
    let conditionText = data.current.condition.text;
    let conditionIcon = data.current.condition.icon;
    let currentTemp = data.current.temp_c;
    let feelsLike = data.current.feelslike_c;
    let windDir = data.current.wind_dir;
    let windSpeed = data.current.wind_kph;
    let windGusts = data.current.gust_kph;
    let aqi = data.current.air_quality["us-epa-index"];
    let uv = data.current.uv;
    let rain = data.current.precip_mm;
    let lastUpdated = data.current.last_updated;


    document.getElementById('city').textContent = city;
    document.getElementById('country').textContent = country;
    document.getElementById('localTime').textContent = localTime;
    document.getElementById('lat').textContent = `Lat: ${lat}`;
    document.getElementById('lon').textContent = `Lon: ${lon}`;
    document.getElementById('conditionText').textContent = conditionText;
    document.getElementById('weatherImage').innerHTML = `<img src="${conditionIcon}" alt="weather image">`;
    document.getElementById('temp').textContent = `Current: ${currentTemp}°C`;
    document.getElementById('feelsLike').textContent = `Feels like: ${feelsLike}°C`;
    document.getElementById('windDir').textContent = `Wind Direction: ${windDir}`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed}kph`;
    document.getElementById('windGusts').textContent = `Wind Gusts: ${windGusts}kph`;
    document.getElementById('aqi').textContent = `AQ Index: ${aqi}`;
    document.getElementById('uv').textContent = `UV Index: ${uv}`;
    document.getElementById('rain').textContent = `Rainfall: ${rain}mm`;
    document.getElementById('lastUpdated').textContent = `Updated ${lastUpdated}`;

}

// Call the getWeather function
getWeather();

let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async (e) => {
    const locationUrl = getLocation();
    await getWeather(locationUrl);
})


