import { PhotoApi } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loadingIndicator: document.querySelector('.loader'),
    loadBtn: document.querySelector('.load-btn')
};

const photoApi = new PhotoApi();

refs.form.addEventListener('submit', onFormSubmit);
refs.loadBtn.addEventListener('click', onLoadMoreClick)

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

    showLoader();

    photoApi.getPhotos(searchValue).then(res=> {
        refs.gallery.innerHTML = '';
        if (res.hits.length === 0) {
            hideLoader();
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                timeout: 3000,
            });

        } else {
            hideLoader();
            galleryTemplate(res.hits)
        }
    } )
    
}

async function onLoadMoreClick(){
    photoApi.page += 1;

    showLoader()

    const result = await photoApi.getPhotos();
    const markup = galleryTemplate(result.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function changeBtnStatus(){

}

function showLoader() {
    refs.loadingIndicator.classList.remove('hidden');
}

function hideLoader() {
    refs.loadingIndicator.classList.add('hidden');
}

function showLoadBtn() {
    refs.loadBtn.classList.remove('hidden');
}

function hideLoadBtn() {
    refs.loadBtn.classList.add('hidden');
}


