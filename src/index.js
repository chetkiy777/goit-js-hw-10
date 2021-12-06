import './css/styles.css';

import { debounce, min } from 'lodash'
import { Notify } from 'notiflix'

import Country from './api/api.js'
import renderCountryInfo from './js/renderInfo';
import renderCountryNames from './js/renderName';

const DEBOUNCE_DELAY = 300;

const inputField = document.querySelector('#search-box')

const title = document.querySelector('.country-info')

const CountryAPI = new Country()


inputField.addEventListener('input', debounce(() => {
  
  let inputValue = inputField.value
  CountryAPI.query = inputValue
  const minLetter = inputValue.split('').length

  // Проверка на количество введенных букв
  if (minLetter >= 2) {
    CountryAPI.fetchCountry()
      .then(renderCountryNames)
      .catch(error => Notify.failure(error))
  }
    }, DEBOUNCE_DELAY))

