import axios from "axios";


const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:5001/fir-fe37d/us-central1/api",
    baseURL: "https://console.firebase.google.com/project/fir-fe37d/overview"
});



export {axiosInstance}