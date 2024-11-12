import { PhotoApi } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadingIndicator = document.querySelector('.loader')
const loadBtn = document.querySelector('.load-btn')
const photoApi = new PhotoApi();


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value
    if (searchValue.trim() === '') {
        iziToast.show({
            message: 'Please enter a search term!',
            position: 'topRight',
            timeout: 3000,
        });
        return;
    }
    loadingIndicator.classList.remove('hidden');
    photoApi.getPhotos(searchValue).then(res=> {
        gallery.innerHTML = '';
        if (res.hits.length === 0) {
            loadingIndicator.classList.add('hidden');
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                timeout: 3000,
              });

        } else {
            loadingIndicator.classList.add('hidden');
            galleryTemplate(res.hits)
        }
    } )
    
}

function changeBtnStatus(){

}

function showLoadBtn() {
    loadBtn.classList.remove('hidden');
}

function hideLoadBtn() {
    loadBtn.classList.add('hidden');
}