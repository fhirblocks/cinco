const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
	let url = zipUrl(zip);
	return fetch(url)
		.then(response => response.json())
		.then(responseJSON => {
			resp = {main: responseJSON.weather[0].main, description: responseJSON.weather[0].description, temp: responseJSON.main.temp};
			alert(responseJSON.weather[0].main); return resp;})
		.catch();
}

export default {fetchForecast: fetchForecast};