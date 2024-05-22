import { useEffect, useState } from "react";
import axios from "axios";
import "../css/dashboard.css";

const KitchenTable = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [pendingItems, setPendingItems] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);
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
    const intervalId = setInterval(fetchOrderItems, 5000); // Fetch orderItems every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setPendingItems(orderItems.filter((item) => item.status === "pending"));
    setCookingItems(orderItems.filter((item) => item.status === "cooking"));
  }, [orderItems]);

  const handlePendingAdd = (id) => async () => {
    console.log("pending", id);
    try {
      const handleChange = await axios.put("/api/order/" + id, {
        status: "cooking",
      });
    fetchOrderItems();

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
    fetchOrderItems();
      console.log(handleChange);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <table className="kitchen">
    <thead>
      <tr>
        <th colSpan={2}>Pending</th>
        <th colSpan={2}>Cooking</th>
      </tr>
      <tr>
        <th>Item</th>
        <th>Action</th>
        <th>Item</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {pendingItems.length || cookingItems.length ? (
      <>
        {pendingItems.map((pendingItem, index) => (
          <tr key={index}>
            <td><center>{pendingItem.item_name} x{pendingItem.quantity}</center></td>
            <td className="center">
              <span className="button-wrapper">
                <button onClick={handlePendingAdd(pendingItem.order_id)} className="add" aria-label="Add to Cooking"></button>
              </span>
            </td>
            {cookingItems[index] ? (
              <>
                <td><center>{cookingItems[index].item_name} x{cookingItems[index].quantity}</center></td>
                <td className="center">
                  <span className="button-wrapper">
                    <button onClick={handleCookingAdd(cookingItems[index].order_id)} className="add" aria-label="Move to Route"></button>
                  </span>
                </td>
              </>
            ) : (
              <td colSpan={2}></td>
            )}
          </tr>
        ))}
        {/* Handle the case where there are cooking items but no pending items */}
        {pendingItems.length < cookingItems.length && cookingItems.map((cookingItem, index) => (
          !pendingItems[index] && (
            <tr key={index}>
              <td colSpan={2}></td>
              <td>{cookingItem.item_name} x{cookingItem.quantity}</td>
              <td>
                <span className="button-wrapper">
                  <button onClick={handleCookingAdd(cookingItem.order_id)} className="add" aria-label="Move to Route"></button>
                </span>
              </td>
            </tr>
          )
        ))}
      </>
    ) : (
      <tr>
        <td colSpan={4}>No items to display</td>
      </tr>
    )}
    </tbody>
    </table>
    </>
  );
};

export default KitchenTable;
