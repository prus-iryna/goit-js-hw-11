import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = form.querySelector('input[name="search-text"]');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search term before submitting.',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, no images matching your search query were found.Please try again.',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      showLoader();
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
}
