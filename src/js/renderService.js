const refs = {
     list: document.querySelector('.country-list'),
     info: document.querySelector('.country-info'),
}

export default class RenderService {
    constructor() {

    }

    renderCountryList(countrysArray) {
        this.clearList()
        
        countrysArray.map(country => {
            const { name, flags } = country
            return refs.list.insertAdjacentHTML('afterbegin',
                `<li class="list__item">
                    <div class="list__img-thumb">
                        <img src="${flags.png}" alt="flag-mini">
                    </div>
                    <p class="list__text">${name}</p>
                </li>
                `)}  
        )
    }
    
    renderCountryInfo(countryArray) {
        this.clearList()

        countryArray.map(country => {
            const { name, capital, population, flags, languages } = country
            let language = languages.map(language => language.name).join(', ')

            return refs.info.innerHTML = `
                <article class="card">
                    <div class="card__img-thumb">
                        <img src=${flags.png} alt="flags">
                        <h1 class="card__title">${name}</h1>
                    </div>
                    <p class="card__item"><b>capital: </b>${capital}</p>
                    <p class="card__item"><b>languages: </b>${language}</p>
                    <p class="card__item"><b>population: </b>${population}</p>
                </article>
                `
    })
}


    clearList() {
        refs.list.textContent = ''
        refs.info.textContent = ''
    }

    
}