import axios from '../../Instances/ProductInstance'; 

const postProduct = (a , b) => {

    axios.post("/products.json" , a)
    .then(response => console.log(response))
    .catch(error => console.log(error))

}

export default postProduct; 