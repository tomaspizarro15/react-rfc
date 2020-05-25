import React from 'react';
import './../../Store.css';

const ProductsList = (props) => {

    console.log(props.prd)

    let opacity = "1"; 

    return (

        <div className="products_list_container">
          {props.prd.map(product => {
              if(product.opacity !== 1){
                  opacity = "0";
              }else {
                opacity = "1";
              }
              return(
              <li  style ={{opacity : opacity}}key = {product.id}>{product.name}</li>
              )
          })}
        </div>

    )


}

export default ProductsList; 