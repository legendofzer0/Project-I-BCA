import { useEffect, useState } from "react";
import "../css/card.css";
function OrderCard({ order }) {
  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [status, setStatus] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    setItemName(order.item_name);
    setPrice(order.price);
    setStatus(order.status);
    setImage(order.image);
    setQuantity(order.quantity);
  }, [order]);
  if (status === "delivered") return;
  // console.log(itemName + "" + price + "" + status);
  return (
    <>
      <div className="center">
        <div className="flex card3">
          <div>
            <img className="img" src={`api/${image}`} />
          </div>
          <div>
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
    </>
  );
}

export default OrderCard;
