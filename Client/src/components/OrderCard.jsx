import { useEffect, useState } from "react";
import "../css/card.css";

function OrderCard({ order }) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  // Update local state when order prop changes
  useEffect(() => {
    if (order) {
      setItemName(order.item_name || "");
      setPrice(order.price || 0);
      setQuantity(order.quantity || 0);
      setStatus(order.status || "");
      setImage(order.image || "");
    }
  }, [order]);

  // If status is "delivered", render nothing
  if (status === "delivered") return null;

  return (
    <div className="center">
      <div className="card3">
        <div className="flex2">
          <div>
            <img className="image2" src={`api/${image}`} alt={itemName} />
          </div>
          <div className="shift">
            <h3>{itemName}</h3>
            <span>
              RS.{price} x {quantity} = <b> {price * quantity}</b>
            </span>
            <br />
            <span>
              <b>{status}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
