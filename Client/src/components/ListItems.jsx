import { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";

const ListItem = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/item");
      setItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      console.log("delete" + id);
      const deleteItemResponse = await axios.delete("/api/item/" + id);
      console.log(deleteItemResponse);
      fetchItems();
    } catch (err) {
      console.error("Failed to delete item: ", err);
    }
  };

  const handleEditUser = (id) => {
    console.log("Edit item " + id);
  };
  const handleAddImage = (id) => {
    console.log("Add item " + id);
  };

  return (
    <div className="user-list">
      <h2>Item List</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="column bottom">S.N.</th>
            <th className="column bottom">Item Name</th>
            <th className="column bottom">Tag</th>
            <th className="column bottom">Price</th>
            <th className="column Description bottom">Description</th>
            <th className="bottom">Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => (
            <tr key={item.item_id}>
              <td className="column">{index + 1}</td>
              <td className="column">{item.item_name}</td>
              <td className="column">{item.tags}</td>
              <td className="column">{item.price}</td>
              <td className="column Description">{item.description}</td>
              <td className="action">
                <span className="btn-back">
                  <button
                    className="edit2"
                    onClick={() => handleEditUser(item.item_id)}
                  />
                </span>
                <span className="btn-back">
                  <button
                    className="add"
                    onClick={() => handleAddImage(item.item_id)}
                  />
                </span>
                <span className="btn-back">
                  <button
                    className="del"
                    onClick={() => handleDeleteUser(item.item_id)}
                  ></button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
