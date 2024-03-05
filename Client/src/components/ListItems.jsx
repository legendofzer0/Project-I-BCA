import { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";
import { Modal } from "@mui/material";

import ItemModal from "../modal/picturemodal";
import UpdateItemModal from "../modal/updateitem";

const ListItem = () => {
  const [itemList, setItemList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [addData, setAddData] = useState({});
  const [editData, setEditData] = useState({});

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

  const handleEditUser = async (id) => {
    const response = await axios.get("/api/item/info/" + id);
    console.log("Edit item " + id);
    console.log(response);
    const name = response.data[0].item_name;
    const tags = response.data[0].tags;
    const price = response.data[0].price;
    const description = response.data[0].description;
    setEditData({
      name: name,
      tags: tags,
      price: price,
      description: description,
      Id: id,
    });
    setIsEdit(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };

  const handleAddImage = async (id) => {
    const response = await axios.get("/api/item/" + id);
    console.log("Add item " + id);
    console.log(response);
    const name = response.data[0].item_name;
    setAddData({
      name: name,
      Id: id,
    });
    setIsAdd(true);
  };

  const handleAdd = () => setIsAdd(false);

  return (
    <>
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
      <Modal open={isAdd} onClose={handleAdd}>
        <div>
          <ItemModal addData={addData} />
        </div>
      </Modal>
      <Modal open={isEdit} onClose={handleEdit}>
        <div>
          <UpdateItemModal editData={editData} fetchItems={fetchItems} />
        </div>
      </Modal>
    </>
  );
};

export default ListItem;
