import axios from "axios";
import { useState, useEffect } from "react";
import CartTile from "../components/CartTile";

function Cart() {
  const userId = 8;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/api/cart/user/${userId}`);
        console.log(response);
        setCart(response.data);
      } catch (err) {
        console.log(err);
      }
      console.log(cart);
    };

    fetchCartItems();
  }, []);
  return (
    <>
      <div>
        <h1>CART</h1>
        <div className="line"></div>
        <div>
          {cart.map((element) => (
            <CartTile key={element.id} item={element} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
