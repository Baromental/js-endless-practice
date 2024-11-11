import axios from "axios";

const APIKey = '42006022-41a20d969efbb704c546dcbcd';

export class PhotoApi {
    static BASE_URL = "https://pixabay.com";
    static END_POINT = "/api";

    constructor(){}

    getPhotos(searchValue){     
        const params = new URLSearchParams({
            key: APIKey,
            q: searchValue,
            image_type:  'photo',
            orientation : 'horizontal',
            page: 1,
            per_page: 15,
        });
        const url = `${PhotoApi.BASE_URL}${PhotoApi.END_POINT}?${params}`;

        return axios(url).then(res => res.data)
    }
}