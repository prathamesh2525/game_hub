import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0ae5051fbaca4c4dbd6a60cfce76af95'
    }
})