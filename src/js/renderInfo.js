export default function renderCountryInfo({capital, area, population, flags}) {
    return `
        <li>
            <img src=${flags.png} alt="">
        </li>
        <li>
            <span>Населеник: </span> ${population}
        </li>
        <li>
           <span>Площадь: </span> ${area}
        </li>
        <li>
            <span>Столица: </span>${capital}
        </li>
        
        `
}