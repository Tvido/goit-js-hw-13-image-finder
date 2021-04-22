const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21227182-bce953b8699f3d441be82715f';

function fetchImages(searchQuery, page = 1, perPage = 12) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${KEY}`,
  ).then(r => r.json());
}
export default fetchImages;



