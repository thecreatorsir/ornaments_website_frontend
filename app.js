const weather = document.querySelector(".weather");
async function getWeather(url) {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

getWeather(
  `http://api.weatherstack.com/current?access_key=${key.key}&query=${key.city},${key.state}`
)
  .then((data) => {
    weather.innerHTML = `Current Temperature At Ludhiana is ${data.current.temperature}°c`;
  })
  .catch((err) => console.log(err));
