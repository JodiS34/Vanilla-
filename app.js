function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "7413b84e1e3f7a605f2df00a1bf1d6f2";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid={Apikey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
