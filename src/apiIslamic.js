
import axios from "axios";

const http = axios.create({
    baseURL: "https://islamic-api-zhirrr.vercel.app/api/"
})

export default http;