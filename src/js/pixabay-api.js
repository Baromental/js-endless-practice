import axios from "axios";

const APIKey = '42006022-41a20d969efbb704c546dcbcd';

export class PhotoApi {
    static BASE_URL = "https://pixabay.com";
    static END_POINT = "/api";

    constructor(){}

    async getPhotos(searchValue){     
        const params = new URLSearchParams({
            key: APIKey,
            q: searchValue,
            image_type:  'photo',
            orientation : 'horizontal',
            page: 1,
            per_page: 15,
        });
        const url = `${PhotoApi.BASE_URL}${PhotoApi.END_POINT}?${params}`;

        const response = await axios(url);

        return response.data
    }
}