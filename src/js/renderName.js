import clearList from "./cleanList"

export default function renderCountryNames(countrysArray) {
        clearList()
        countrysArray.map(country => {
            const list = document.querySelector('.country-list')
            const { name, flags } = country
            return list.insertAdjacentHTML('afterbegin',
                `<li class="list__item">
                    <div class="list__img-thumb">
                        <img src="${flags.png}" width="50px" alt="flag-mini">
                    </div>
                    <p>${name}</p>
                </li>`)
        }
           
    )} 