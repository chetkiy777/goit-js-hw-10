import './css/styles.css';
import { debounce } from 'lodash'
import Country from './api/api.js'
import renderCountryInfo from './js/renderInfo';

const DEBOUNCE_DELAY = 300;


const inputField = document.querySelector('#search-box')
const list = document.querySelector('.country-list')

const CountryAPI = new Country()

inputField.addEventListener('input', debounce(() => {
  CountryAPI.query = inputField.value
    CountryAPI.fetchCountry()
        .then(arrayCountrys => {
            const markup = arrayCountrys.map(country => {
            const {capital, area, population, flags} = country
          return renderCountryInfo({capital, area, population, flags})
        })
            
        list.innerHTML = markup })
    }, 1000))

