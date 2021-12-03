const BASE_URL = "https://restcountries.com/v2/name"

export const fetchCountry = country => {
    fetch(`${BASE_URL}/${country}`).then(res => res.json()).then(console.log)
}