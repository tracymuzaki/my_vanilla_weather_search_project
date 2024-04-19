function refreshWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "t0ofa24ea50a4bf83aaaf293402db0a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris");