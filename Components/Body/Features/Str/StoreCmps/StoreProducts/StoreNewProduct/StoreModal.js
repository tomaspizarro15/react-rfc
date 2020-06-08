import React from 'react'; 
import './../StoreProducts.css'; 


const StoreModal = (props) => {

    return(
        <div className ="store_modal">
            <h1>Product Created!</h1>
            <p>A new product has been added succesfully to the site</p>
            <button className = "modal_button"  onClick = {null}>Ok</button>
        </div>
    )

}

export default StoreModal; 