import './css/styles.css';

import { debounce } from 'lodash';
import { Notify } from 'notiflix';

import RenderService from './js/renderService';
import Country from './api/api.js';

const DEBOUNCE_DELAY = 300

const inputField = document.querySelector('#search-box')

const countryAPI = new Country()
const renderService = new RenderService()

inputField.addEventListener('input', debounce(() => {
  
  let inputValue = inputField.value.trim()
  countryAPI.query = inputValue
  const minLetter = inputValue.length

  // Проверка на количество введенных букв
  if (minLetter >= 1) {
    countryAPI.fetchCountry()
      .then(countrysArray => {

        // Проверка если в массиве более 10 стран
        if (countrysArray.length >= 10) {
          return Notify.info('Too many matches found. Please enter a more specific name')
          // Проверка если в массиве 1 страна - рендерим её инфо
        } else if (countrysArray.length === 1) {
          console.log(countrysArray)
          // renderCountryInfo(countrysArray)
          renderService.renderCountryInfo(countrysArray)
          // Проверка если в массиве стран больше 1 и меньше 10 - рендерим список стран
        } else if (countrysArray.length < 10 && countrysArray.length >= 2) {
          // renderCountryList(countrysArray)
          renderService.renderCountryList(countrysArray)
        } else {
          return Notify.failure('Oops, there is no country with that name')
        }
      })
      .catch(error => console.log(error))
    // Очистка всего контента , если в инпуте пустая строка
  } else if (minLetter === 0) {
    renderService.clearList()
  }
    }, DEBOUNCE_DELAY))

