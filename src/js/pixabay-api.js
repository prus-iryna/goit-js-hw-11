import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50785102-9c13520f9ca563685942e67a3';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };
  return axios
    .get(BASE_URL, { params })
    .then(res => res.data)
    .catch(error => {
      error.message;
    });
}
