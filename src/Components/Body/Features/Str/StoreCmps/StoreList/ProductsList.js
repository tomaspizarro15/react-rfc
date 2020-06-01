import React from 'react';
import './../../Store.css';
import './ProductsList.css'; 
const ProductsList = (props) => {

  let opacity;

  return (

    <div className="products_list_container">
      {props.prd.map((product, i) => {
        if (product.opacity !== 1) {
          opacity = "0";
        } else {
          opacity = "1";
        }
        return (
          <li style={{ opacity: opacity }} key={i}>
            <div className = "product_list_name">
              {product.name}
            </div>
            <div className = "product_list_img">
              {product.img}
            </div>
            <div className = "product_list_info">
              <p>{product.price}</p>
              <p>{product.divisa}</p>
              <div className = "product_list_description">
                {product.descriptions}
              </div>
            </div>
          </li>
        )
      })}
    </div>

  )


}

export default ProductsList; 