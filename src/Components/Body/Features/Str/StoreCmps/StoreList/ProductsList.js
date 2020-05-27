import React from 'react';
import './../../Store.css';

const ProductsList = (props) => {

    let opacity; 

    return (

        <div className="products_list_container">
          {props.prd.map((product , i) => {
              if(product.opacity !== 1){
                  opacity = "0";
              }else {
                opacity = "1";
              }
              return(
              <li  style ={{opacity : opacity}}key = {i}>{product.name}</li>
              )
          })}
        </div>

    )


}

export default ProductsList; 