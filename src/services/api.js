import axios from "axios";

const api = axios.create({
    baseURL: "https://cruzblanca-backend-production.up.railway.app"
});

export default api;