const API_KEY = "r8ZiXb6SIAr7H6X006p9pfM4tXRDiHwB";

const baseUrl = "https://dataservice.accuweather.com/"

export const config = {
    autocomplete: (city) => baseUrl + `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`,
    currentWeather: (locationKey) => baseUrl + `currentconditions/v1/${locationKey}?apikey=${API_KEY}`
};
