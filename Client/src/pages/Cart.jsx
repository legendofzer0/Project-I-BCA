import axios from "axios";
import { useState, useEffect } from "react";
import CartTile from "../components/CartTile";
import Cookies from "universal-cookie";
import "../css/card.css";

function Cart() {
  const cookie = new Cookies();
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const tokenData = cookie.get("token");
    if (!tokenData) return;

    const verifyToken = async () => {
      try {
        const response = await axios.post("/api/user/verifyToken", {
          token: tokenData,
        });
        setUserId(response.data.userId);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    verifyToken();
  }, [cookie]);

  useEffect(() => {
    const fetchCartItems = async () => {
      console.log(userId);
      if (!userId) return;

      try {
        const response = await axios.get(`/api/cart/user/${userId}`);
        setCart(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCartItems();
    const intervalId = setInterval(fetchCartItems, 1000);
    return () => clearInterval(intervalId);
  }, [userId]);

  return (
    <>
      <div className=" cartBack">
        <h1>CART</h1>
        <span className="center">
          <div className="line"></div>
        </span>
        <div>
          {cart.length === 0 ? (
            <h3>Cart is empty</h3>
          ) : (
            cart.map((element) => <CartTile key={element.id} item={element} />)
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
