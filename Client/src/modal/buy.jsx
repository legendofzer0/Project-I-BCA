import { useEffect, useState } from "react";
import "../css/modal.css";
import axios from "axios";

const Buy = ({ itemId, userId }) => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);
  const [type, setType] = useState(); // Ensure itemPrice is initialized to a number to avoid NaN errors
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice to 0
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const orderPayload = {
    f_item_id: itemId,
    f_user_id: userId,
    delivery_address: address,
    quantity: quantity,
  };
  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await axios.get(`/api/item/info/${itemId}`);
        // console.log(response);
        const itemData = response.data[0]; // Store this in a variable for cleaner code
        setItem(itemData.item_name);
        setItemPrice(itemData.price);
        setType(itemData.quantity_type);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenuItem();
  }, [itemId]);

  useEffect(() => {
    calculateTotalPrice();
  }, [itemPrice, quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    let newPrice = quantity * itemPrice;
    setTotalPrice(newPrice);
  };

  const handleBuyClick = () => {
    setError("");
    setSuccess("");
    if (address === "") {
      setError("Please Fill Out everything");
      return;
    }
    if (userId === "" || userId === null || userId === undefined) {
      // console.log(userId);
      setError("Please LogIn");
      return;
    }
    try {
      // console.log(userId);
      const order = axios.post("/api/order", orderPayload);
      setSuccess("Order Placed Successfully");
    } catch (error) {
      console.log(error);
    }
    console.log("Order placed:", { item, quantity, totalPrice, address });
  };

  return (
    
    <div className="center middle">
      <div className="modal form">
        <div className="placeOrder">
        <h2>Place Order</h2>
        <div className="center error-message">{error}</div>
        <div className="center success-message">{success}</div>
        <label>
          Item:
          <input type="text" value={item} readOnly />
        </label>
        <label>
          <div>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
        </label>
        <label>
          Total Price:
          <input type="text" value={`Rs.${totalPrice}`} readOnly />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button className="submit" onClick={handleBuyClick}>
          Buy
        </button>
        <div className="type">
            {type}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
