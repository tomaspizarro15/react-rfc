import axios from "axios";

const productInstance = axios.create({
    baseURL: "https://react-my-app-dbe1b.firebaseio.com/",
})  
export default productInstance; 