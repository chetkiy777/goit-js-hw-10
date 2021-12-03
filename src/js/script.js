import {fetchCountry} from './fetchCountries'

const inputField = document.querySelector('#search-box')
const infoOutput = document.querySelector('country-info')

inputField.addEventListener('input', () => {
    let inputValue = inputField.value
    const minLength = inputValue.slice('').length >= 2
})
