import React from "react";
import ProductItem from "./ProductItem";
import ProductData from "../ProductData";
import productData from "../ProductData";

const Product = (props) => {
  console.log(ProductData);

  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={props.cart}
          setCart={props.setCart}
        />
      ))}
    </div>
  );
};

export default Product;
