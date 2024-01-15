import axios from "axios";

const http = axios.create({
    baseURL: "https://api.npoint.io/99c279bb173a6e28359c/"
})

export default http;