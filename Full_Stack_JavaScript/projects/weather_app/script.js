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

        // Check if the response indicates an error
        if (data.error) {
            const errorCode = data.error.code || 'Unknown';
            console.log('Error code:', errorCode);

            const errorMessage = data.error.message || 'Unknown error';
            console.log('Error fetching weather data:', errorMessage);

            document.getElementById('errorCode').textContent = `Error code ${errorCode}: ${errorMessage}`
        } else {
            // Process the successful response
            console.log(data);
            document.getElementById('errorCode').textContent = "";
            updateWeatherUI(data);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to reformat date & time
function reformatDateTime(dateTimeString) {
    let [datePart, timePart] = dateTimeString.split(' ');
    let [year, month, day] = datePart.split('-');

    if (month) {
        // Format month
        if (month === '01') {
            month = 'Jan';
        } else if (month === '02') {
            month = 'Feb';
        } else if (month === '03') {
            month = 'Mar';
        } else if (month === '04') {
            month = 'Apr';
        } else if (month === '05') {
            month = 'May';
        } else if (month === '06') {
            month = 'Jun';
        } else if (month === '07') {
            month = 'Jul';
        } else if (month === '08') {
            month = 'Aug';
        } else if (month === '09') {
            month = 'Sep';
        } else if (month === '10') {
            month = 'Oct';
        } else if (month === '11') {
            month = 'Nov';
        } else if (month === '12') {
            month = 'Dec';
        }

        if (timePart) {
            // Handle date with time
            return `${timePart} ${day}-${month}-${year}`;
        } else {
            // Handle date without time
            return `${day}-${month}-${year}`;
        }
    }
}

// Function to update HTML weather data
function updateWeatherUI(data){
    let city = data.location.name;
    let region = data.location.region;
    let country = data.location.country;
    let localTime = reformatDateTime(data.location.localtime);
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
    let lastUpdated = reformatDateTime(data.current.last_updated);
    let zeroDate = reformatDateTime(data.forecast.forecastday[0].date);
    let zeroCondition = data.forecast.forecastday[0].day.condition.text;
    let zeroMax = data.forecast.forecastday[0].day.maxtemp_c;
    let zeroMin = data.forecast.forecastday[0].day.mintemp_c;
    let oneDate = reformatDateTime(data.forecast.forecastday[1].date);
    let oneCondition = data.forecast.forecastday[1].day.condition.text;
    let oneMax = data.forecast.forecastday[1].day.maxtemp_c;
    let oneMin = data.forecast.forecastday[1].day.mintemp_c;
    let twoDate = reformatDateTime(data.forecast.forecastday[2].date);
    let twoCondition = data.forecast.forecastday[2].day.condition.text;
    let twoMax = data.forecast.forecastday[2].day.maxtemp_c;
    let twoMin = data.forecast.forecastday[2].day.mintemp_c;


    document.getElementById('city').textContent = city;
    document.getElementById('region').textContent = region;
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
    document.getElementById('zeroDate').textContent = zeroDate
    document.getElementById('zeroCondition').textContent = zeroCondition
    document.getElementById('zeroMax').textContent = `Max: ${zeroMax}°C`
    document.getElementById('zeroMin').textContent = `Min: ${zeroMin}°C`
    document.getElementById('oneDate').textContent = oneDate
    document.getElementById('oneCondition').textContent = oneCondition
    document.getElementById('oneMax').textContent = `Max: ${oneMax}°C`
    document.getElementById('oneMin').textContent = `Min: ${oneMin}°C`
    document.getElementById('twoDate').textContent = twoDate
    document.getElementById('twoCondition').textContent = twoCondition
    document.getElementById('twoMax').textContent = `Max: ${twoMax}°C`
    document.getElementById('twoMin').textContent = `Min: ${twoMin}°C`

}

// Call the getWeather function
getWeather();

let searchButton = document.getElementById('searchButton');
let userInput = document.getElementById('userInput')

async function userLocationSearch() {
    const locationUrl = getLocation();
    await getWeather(locationUrl);
}

userInput.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        userLocationSearch();
    }
});

searchButton.addEventListener('click', async (e) => {
    userLocationSearch();
});

