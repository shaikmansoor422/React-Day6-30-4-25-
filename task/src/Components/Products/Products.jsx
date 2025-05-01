import React from 'react';
import Product from '../Product/Product';

const Products = () => {
  const prod_data = [
    { id: 1, name: "Laptop", cost: "55000" },
    { id: 2, name: "Mobile", cost: "15000" },
    { id: 3, name: "Tab", cost: "25000" },
    { id: 4, name: "Watch", cost: "35000" },
    { id: 5, name: "Shoes", cost: "45000" }
  ];

  return (
    <>
    <Product data={prod_data}/>
    </>
  );
};

export default Products;
