import axios from "axios";
//retrieve an instance of axios
const axiosApiInstance = axios.create();

//defining our settings for axios instance
// axiosApiInstance.defaults.baseURL = "https://guided-meditation.onrender.com"; //location of our backend server
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
