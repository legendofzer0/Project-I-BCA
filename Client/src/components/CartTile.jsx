import { useEffect, useState } from "react";
import axios from "axios";

function CartTile({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrease = async () => {
    if (quantity === 1) {
      console.log("it is now empty");
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
      setQuantity(newQuantity); // Update local state with the new quantity
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <img src={item.image} alt={item.item_name} />
        </div>
        <div>
          <span>{item.item_name}</span>
          <span>
            NRS.{item.price} x {quantity} = NRS.{item.price * quantity}
          </span>
          <div>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTile;
