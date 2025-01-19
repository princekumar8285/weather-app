document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '4789101faf4fcc92fdfeb4a3a49ada1a'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherData = data;
                const cityName = weatherData.name;
                const temperature = weatherData.main.temp;
                const description = weatherData.weather[0].description;
                const humidity = weatherData.main.humidity;
                const windSpeed = weatherData.wind.speed;
                const iconCode = weatherData.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

                // Update UI
                document.getElementById('cityName').textContent = cityName;
                document.getElementById('temp').textContent = `Temperature: ${temperature} °C`;
                document.getElementById('description').textContent = `Description: ${description}`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;
                document.getElementById('weatherIcon').src = iconUrl;

                // Show weather results
                document.getElementById('weatherResults').style.display = 'block';
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            alert('Error fetching weather data.');
        });
});
