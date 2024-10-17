import { PhotoApi } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const photoApi = new PhotoApi();


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value
    photoApi.getPhotos(searchValue).then(res=> {
        if (res.totalHits === 0) {
            console.log("fuck off!");
        } else {
            galleryTemplate(res.hits)
            console.log(res);
            
        }
    } )
    
}

function galleryTemplate(searchResult) {
    const galleryTemplate = searchResult.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})  => {
        return ` <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}" >
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
                <ul>
                    <li>Likes=${likes}</li>
                    <li>Views =${views }</li>
                    <li>Comments=${comments}</li>
                    <li>Downloads=${downloads}</li>
                </ul>
            </a>
        </li>`
    })
    return gallery.insertAdjacentHTML('afterbegin', galleryTemplate.join(''));
}
