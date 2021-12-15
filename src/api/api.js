export default class Country {
    constructor() {
        this.searchQuery = '';
    }

  async fetchCountry() {
        const url = `https://restcountries.com/v2/name/${this.searchQuery}?fields=name,capital,population,languages,flags`
        return await fetch(url).then(r =>  r.json())
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}