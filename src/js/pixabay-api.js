const APIKey = '42006022-41a20d969efbb704c546dcbcd';

export class PhotoApi {
    static BASE_URL = "https://pixabay.com";
    static END_POINT = "/api";

    constructor(){}

    getPhotos(searchValue){     
        const searchParams = new URLSearchParams({
            key: APIKey,
            q: searchValue,
            image_type:  'photo',
            orientation : 'horizontal',
            safesearch :  true,
        });
        const url = `${PhotoApi.BASE_URL}${PhotoApi.END_POINT}?${searchParams}`;

        return fetch(url).then(res => res.json());
    }
}