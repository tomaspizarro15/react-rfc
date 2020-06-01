
import axios from 'axios'; 


const instance = axios.create({
    baseURL : "https://react-my-app-dbe1b.firebaseio.com/"
})

export default instance; 