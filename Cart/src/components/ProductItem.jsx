import React from "react";

const ProductItem = ({ product, cart, setCart }) => {
  const findProduct = cart.find((item) => item.id === product.id);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-md">
      {" "}
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.image}
        alt="product image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold ">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price} $</p>
        <button
          className={` bg-blue-500 text-white px-4 rounded hover:bg-blue-600 w-full transition duration-200  py-2  ${
            findProduct && "opacity-50 cursor-not-allowed "
          }`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
