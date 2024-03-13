import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import "../css/card.css";
const OrderTrack = ({ id }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("/api/order/user/" + id);
        setOrder(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrder();
    const intervalId = setInterval(fetchOrder, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="title center">Your Order </div>
      <div>
        {order.map((element) => (
          <>
            <OrderCard key={element.id} order={element} />
          </>
        ))}
      </div>
    </>
  );
};

export default OrderTrack;
