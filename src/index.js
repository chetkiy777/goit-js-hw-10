import './css/styles.css';

import { debounce } from 'lodash'
import { Notify } from 'notiflix'

import Country from './api/api.js'
import renderCountryInfo from './js/renderInfo';
import renderCountryList from './js/renderList';
import clearList from './js/cleanList';

const DEBOUNCE_DELAY = 300;

const inputField = document.querySelector('#search-box')

const CountryAPI = new Country()


inputField.addEventListener('input', debounce(() => {
  
  let inputValue = inputField.value.trim()
  CountryAPI.query = inputValue
  const minLetter = inputValue.split('').length

  // Проверка на количество введенных букв
  if (minLetter >= 1) {
    CountryAPI.fetchCountry()
      .then(countrysArray => {
        if (countrysArray.length >= 10) {
          return Notify.info('Too many matches found. Please enter a more specific name')
        } else if (countrysArray.length === 1) {
          console.log(countrysArray)
          renderCountryInfo(countrysArray) 
        } else if (countrysArray.length < 10 && countrysArray.length >= 2) {
          renderCountryList(countrysArray)
        } else {
          return Notify.failure('Oops, there is no country with that name')
        }
      })
      .catch(error => console.log(error))
  } else if (minLetter === 0) {
    clearList()
  }
    }, DEBOUNCE_DELAY))

