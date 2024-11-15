import axios from "axios";

const APIKey = '42006022-41a20d969efbb704c546dcbcd';

export class PhotoApi {
    static BASE_URL = "https://pixabay.com";
    static END_POINT = "/api";

    constructor(){
        this.query = '';
        this.page = 1;
        this.pageSize = 15;
        this.totalResults = 0;
    }

    async getPhotos(searchValue = this.query) {
        if (searchValue) this.query = searchValue;   
        const params = new URLSearchParams({
            key: APIKey,
            q: this.query,
            image_type:  'photo',
            orientation : 'horizontal',
            page: this.page,
            per_page: this.pageSize,
        });

        const url = `${PhotoApi.BASE_URL}${PhotoApi.END_POINT}?${params}`;

        const response = await axios(url);

        return response.data
    }
}