import { useEffect, useState } from "react";
import "../css/dashboard.css";
import axios from "axios";
const RiderTable = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [onRouteItems, setOnRouteItems] = useState([]);
  const fetchOrderItems = async () => {
    try {
      const response = await axios.get("/api/order");
      setOrderItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderItems();
    const intervalId = setInterval(fetchOrderItems, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setOnRouteItems([]);
    setOnRouteItems(orderItems.filter((item) => item.status === "on-route"));
  }, [orderItems]);

  const handleRiderAdd = (id) => async () => {
    try {
      const handleChange = await axios.put("/api/order/" + id, {
        status: "delivered",
      });
      fetchOrderItems()
      console.log(handleChange);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(onRouteItems);
  return (
    <div className="center">
      {/* <h2>Delivering</h2> */}
      <table className="Riderbody">
        <thead>
          <tr>
            <th className="column">Item Name</th>
            <th className="column">Address</th>
            <th className="column">Number</th>
            <th className="column">Actions</th>
          </tr>
        </thead>
        <tbody className="ritem">
          {onRouteItems.map((item, index) => (
            <tr key={index}>
              <td>{item.item_name} x {item.quantity}</td>
              <td>{item.delivery_address}</td>
              <td>{item.phone_number}</td>
              <td>
                <button
                  onClick={handleRiderAdd(item.order_id)}
                  className="add"
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiderTable;
