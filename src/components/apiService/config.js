const API_KEY = "y0HdfxJZcI6YrmN5iiIGPmKbtsA9uauF";

const baseUrl = "https://dataservice.accuweather.com/"

export const config = {
    autocomplete: (city) => baseUrl + `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`,
    currentWeather: (locationKey) => baseUrl + `currentconditions/v1/${locationKey}?apikey=${API_KEY}`
};
