import './css/styles.css';
import 'material-design-icons/iconfont/material-icons.css';

import refs from "../js/refs";
import fetchImages from './js/apiService';
import renderImageCards from './js/renderImages';
import debounce from 'lodash.debounce';


refs.searchForm.addEventListener('input', debounce(onSearch, 300));
