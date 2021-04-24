import './css/styles.css';
import 'material-design-icons/iconfont/material-icons.css';

import debounce from 'lodash.debounce';
import ApiService from './js/apiService';
import hitsTpl from './tmp/cards.hbs';
import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
    gallery: document.querySelector(".gallery"),
    searchForm: document.querySelector("#search-form"),
    scrollElem: document.getElementById('scrollToTop'),
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const apiService = new ApiService();


refs.searchForm.addEventListener('input', debounce(onSearch, 500));
loadMoreBtn.refs.button.addEventListener('click', fetchHits);

function onSearch(e) {
    e.preventDefault();

    apiService.query = refs.searchForm.elements.query.value;

    loadMoreBtn.show();
    apiService.resetPage();

    clearHits();
    fetchHits();
    }

function fetchHits() {
    loadMoreBtn.disable();
    apiService.fetchItems().then(hits => {
        renderMarkup(hits);
        loadMoreBtn.enable();
    });
}

function renderMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', hitsTpl(hits));
    }

function clearHits() {
    refs.gallery.innerHTML = '';
}

refs.scrollElem.addEventListener('click', scrollToTop);

window.addEventListener('scroll', function () {
  if (pageYOffset > 100) {
    refs.scrollElem.style.opacity = '1';
  } else {
    refs.scrollElem.style.opacity = '0';
  }
});

function scrollToTop() {
  window.scrollTo(500, 0);
}