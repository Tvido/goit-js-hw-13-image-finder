export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.KEY = '21227182-bce953b8699f3d441be82715f';
        this.BASE_URL = 'https://pixabay.com/api';
    }

    fetchItems() {
        const url = `${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.KEY}`

        return fetch(url)
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                this.page += 1;
                return data.hits;
            });
    }
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}