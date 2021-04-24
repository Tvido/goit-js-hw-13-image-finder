import './css/styles.css';
import 'material-design-icons/iconfont/material-icons.css';

import renderImageCards from './js/renderImages';
import debounce from 'lodash.debounce';
import ApiService from './js/apiService';
import hitsTpl from './tmp/cards.hbs';

const refs = {
    gallery: document.querySelector(".gallery"),
    searchForm: document.querySelector("#search-form"),
    loadBtn: document.querySelector('[data-action="load-more"]'),
};

const apiService = new ApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.loadBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();

    apiService.query = refs.searchForm.elements.query.value;
    apiService.resetPage();
    apiService.fetchItems().then(hits => {
        clearHits();
        renderMarkup(hits);
    });
}

function onLoadMore() {
    apiService.fetchItems().then(renderMarkup);
}

function renderMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', hitsTpl(hits));
}

function clearHits() {
    refs.gallery.innerHTML = '';
}