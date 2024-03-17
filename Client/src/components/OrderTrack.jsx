import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import "../css/card.css";

const OrderTrack = ({ id }) => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/order/user/" + id);
        setOrder(response.data);
        // console.log(response);
        // console.log(id);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Error fetching orders. Please try again later.");
        setLoading(false);
      }
    };

    fetchOrder();
    const intervalId = setInterval(fetchOrder, 10000); // Fetch orders every 10 seconds
    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <>
      <div className="title center">Your Orders</div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : order.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {order.map((element) => (
            <OrderCard key={element.id} order={element} />
          ))}
        </div>
      )}
    </>
  );
};

export default OrderTrack;
