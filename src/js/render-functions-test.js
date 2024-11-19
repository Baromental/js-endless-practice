function galleryTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
  return `<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
      <img src=${webformatURL} alt="${tags}" /></a>
      <ul class="image-desc">
          <li class="image-desc-item"><p>Likes</p><p>${likes}</p></li>
          <li class="image-desc-item"><p>Views</p><p>${views}</p></li>
          <li class="image-desc-item"><p>Comments</p><p>${comments}</p></li>
          <li class="image-desc-item"><p>Downloads</p><p>${downloads}</p></li>
      </ul>
  </li>`;  
}

export function gallerysTemplate(searchResult) {
  return searchResult.map(galleryTemplate).join('');
}