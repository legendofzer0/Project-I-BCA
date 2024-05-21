import { useEffect, useState } from "react";
import axios from "axios";
import "../css/dashboard.css";

const KitchenTable = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [pendingItems, setPendingItems] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await axios.get("/api/order");
        setOrderItems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrderItems();
    const intervalId = setInterval(fetchOrderItems, 1000); // Fetch orderItems every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setPendingItems([]);
    setCookingItems([]);
    setPendingItems(orderItems.filter((item) => item.status === "pending"));
    setCookingItems(orderItems.filter((item) => item.status === "cooking"));
  }, [orderItems]);

  const handlePendingAdd = (id) => async () => {
    console.log("pending", id);
    try {
      const handleChange = await axios.put("/api/order/" + id, {
        status: "cooking",
      });
      console.log(handleChange);
    } catch (e) {
      console.log(e);
    }
  };
  const handleCookingAdd = (id) => async () => {
    console.log("cooking", id);
    try {
      const handleChange = await axios.put("/api/order/" + id, {
        status: "on-route",
      });
      console.log(handleChange);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="kitchen">
      <div className="section">
        <h2 className="center">Pending</h2>
        <table className="KtablePending">
          <thead>
            <tr className="Pheading">
              <th className="pcolumn">Item</th>
              <th className="pcolumn">Action</th>
            </tr>
          </thead>
          <tbody >
            <ul>
              {pendingItems.map((item, index) => (
                <li key={index} >
                  <tr>
                    <th className="pcolumn">
                      <span> {item.item_name}</span>
                      <span> x{item.quantity}</span>
                    </th>
                    <th className="pcolumn ">
                      <button
                        onClick={handlePendingAdd(item.order_id)}
                        className="add"
                      />
                    </th>
                  </tr>
                </li>
              ))}
            </ul>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="center">Cooking</h2>
        <table className="KtableCooking">
          <thead>
            <tr lassName="Pheading">
              <th className="pcolumn">Item</th>
              <th className="pcolumn">Action</th>
            </tr>
          </thead>
          <tbody>
            <ul>
              <tr>
                {cookingItems.map((item, index) => (
                  <li key={index}>
                    <th className="pcolumn">
                      <span> {item.item_name}</span>
                      <span> x{item.quantity}</span>
                    </th>
                    <th className="pcolumn">
                      <button
                        onClick={handleCookingAdd(item.order_id)}
                        className="add"
                      />
                    </th>
                  </li>
                ))}
              </tr>
            </ul>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KitchenTable;
