export default function renderCountryInfo(countryArray) {
    
    const card = document.querySelector('.country-info')

    return countryArray.map(country => {
        const { name, capital, area, population, flags } = country
        
        return card.innerHTML = `
            <article class="card">
                <h1 class="card__title">${name}</h1>
                <div class="card__img-thumb">
                    <img src=${flags.png} alt="flags">
                </div>
                <p class="card__item">${capital}</p>
                <p class="card__item">${area}</p>
                <p class="card__item">${population}</p>
            </article>
            `
    })
}