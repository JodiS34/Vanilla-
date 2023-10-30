function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
}

let apiKey = "7413b84e1e3f7a605f2df00a1bf1d6f2";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid={Apikey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
