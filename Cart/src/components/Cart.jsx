import React from "react";

const Cart = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return;

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded shadow-lg ">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>{item.name}</span>

            <span className="mb-4 mt-4">{item.price} $</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold">Total: {total} $</p>

      <button
        className="bg-red-500 py-2 rounded w-full hover:bg-red-600 transition-all  mt-8 px-4 text-white"
        onClick={emptyCart}
      >
        Delete
      </button>
    </div>
  );
};

export default Cart;
