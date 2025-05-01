import React from 'react';
import "./Product.css"
const Product = (props) => {
  console.log(props);  
  return <>
  <div id='cards_container'>
  {props.data.map((prods, index)=>{
    return(
        <div key={index} id='card' >
        <p>Product id : {prods.id}</p>
        <p>Product name : {prods.name}</p>
        <p>Product cost : {prods.cost}</p>
      </div>
      
    )
  })}
  </div>
  
  </>; 
};

export default Product;
