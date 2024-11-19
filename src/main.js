import { PhotoApi } from './js/pixabay-api';
import { gallerysTemplate } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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

    refs.gallery.innerHTML = '';
    photoApi.page = 1;
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
            const markup = gallerysTemplate(res.hits);
            refs.gallery.innerHTML = markup;
            photoApi.totalResults = res.totalHits;
            changeBtnState();
            lightbox.refresh()
        }
    } )
    
}

async function onLoadMoreClick() {
    photoApi.page += 1;
    showLoader();

    try {
        const result = await photoApi.getPhotos();
        const markup = gallerysTemplate(result.hits);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();
        changeBtnState();
        smoothScroll();
    } catch (error) {
        console.error('Error loading more photos:', error);
        iziToast.error({
            message: 'Failed to load more images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
}

function changeBtnState() {
    if (photoApi.page * photoApi.pageSize >= photoApi.totalResults) {
        hideLoadBtn();
    } else {
        showLoadBtn();
    }
}

function smoothScroll() {
    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
        const cardHeight = firstCard.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
    }
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

const lightbox = new SimpleLightbox('.gallery-item a', { 
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

