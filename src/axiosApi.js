import axios from 'axios'
const axiosApi = axios.create({
   baseURL: 'https://blog-53fa1.firebaseio.com/'
});
export default axiosApi