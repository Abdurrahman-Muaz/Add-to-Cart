import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4">
      <Header cart={cart} />

      <Product cart={cart} setCart={setCart} />

      {/* */}

      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
