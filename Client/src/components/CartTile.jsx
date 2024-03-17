import { useState } from "react";
import axios from "axios";
import "../css/card.css";
function CartTile({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrease = async () => {
    if (quantity === 1) {
      console.log("it is empty");
      const response = await axios.delete(`/api/cart/${item.cart_id}`);
    } else {
      const newQuantity = quantity - 1;
      try {
        const response = await axios.put(`/api/cart/${item.cart_id}`, {
          quantity: newQuantity,
        });
        setQuantity(newQuantity); // Update local state with the new quantity
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleIncrease = async () => {
    const newQuantity = quantity + 1;
    try {
      const response = await axios.put(`/api/cart/${item.cart_id}`, {
        quantity: newQuantity,
      });
      setQuantity(newQuantity);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="card3 ">
        <div className="flex">
          <img
            className="image2"
            src={`api/${item.image}`}
            alt={item.item_name}
          />
          <div>
            <div>
              <span className="name">{item.item_name}</span>
            </div>
            <span>
              NRS.{item.price} x {quantity} = NRS.{item.price * quantity}
            </span>
          </div>
          <div>
            <button onClick={handleDecrease} className="cartBtn">
              -
            </button>
            <button onClick={handleIncrease} className="cartBtn">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTile;
