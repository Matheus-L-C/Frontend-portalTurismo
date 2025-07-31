import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-portalturismo-78ow.onrender.com/"

})

export default api;