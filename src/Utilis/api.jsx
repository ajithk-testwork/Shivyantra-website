import axios from "axios";

 const api = axios.create({
    baseURL : "https://shivyantra.onrender.com/api"
})
export default api;