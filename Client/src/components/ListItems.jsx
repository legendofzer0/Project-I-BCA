import { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";
import { Modal } from "@mui/material";

import ItemModal from "../modal/picturemodal";
import UpdateItemModal from "../modal/updateitem";
// import AdminSidebar from "../components/AdminSidebar";
import ConformItemDelete from "../modal/ConformItemDelete";

const ListItem = () => {
  const [itemList, setItemList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
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

  const handleDeleteItem = async (id) => {
    try {
      setIsDelete(true);
      // For demonstration, let's set the delete item id
      setEditData({ id: id });
    } catch (err) {
      console.error("Failed to delete item: ", err);
    }
  };

  const handleEditItem = async (id) => {
    const response = await axios.get("/api/item/info/" + id);
    const name = response.data[0].item_name;
    const tags = response.data[0].tags;
    const price = response.data[0].price;
    const description = response.data[0].description;
    const quantity_type = response.data[0].quantity_type;
    setEditData({
      name: name,
      tags: tags,
      price: price,
      description: description,
      quantity_type: quantity_type,
      id: id,
    });
    setIsEdit(true);
  };

  const handleAddImage = async (id) => {
    const response = await axios.get("/api/item/" + id);
    const name = response.data[0].item_name;
    setAddData({
      name: name,
      id: id,
    });
    setIsAdd(true);
  };

  const handleEdit = () => {
    setIsEdit(false);
    fetchItems();
  };

  const handleAdd = () => {
    setIsAdd(false);
    fetchItems();
  };

  const handleDelete = () => {
    setIsDelete(false);
    // Perform delete action here
  };

  return (
    <>
      {/* <AdminSidebar /> */}
      <div className="user-list">
        <h2>Item List</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="column bottom">S.N.</th>
              <th className="column bottom">Item Name</th>
              <th className="column bottom">Tag</th>
              <th className="column bottom">Price</th>
              <th className="column bottom">Quantity Type</th>
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
                <td className="column">{item.quantity_type}</td>
                <td className="column Description">{item.description}</td>
                <td className="action">
                  <span className="btn-back">
                    <button
                      className="edit2"
                      onClick={() => handleEditItem(item.item_id)}
                    ></button>
                  </span>
                  <span className="btn-back">
                    <button
                      className="add"
                      onClick={() => handleAddImage(item.item_id)}
                    ></button>
                  </span>
                  <span className="btn-back">
                    <button
                      className="del"
                      onClick={() => handleDeleteItem(item.item_id)}
                    ></button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={isDelete} onClose={handleDelete}>
        <div>
          <ConformItemDelete
            id={editData.id}
            onClose={() => setIsDelete(false)}
          />
        </div>
      </Modal>
      <Modal open={isAdd} onClose={handleAdd}>
        <div>
          <ItemModal addData={addData} onClose={handleAdd} />
        </div>
      </Modal>
      <Modal open={isEdit} onClose={handleEdit}>
        <div>
          <UpdateItemModal
            editData={editData}
            onClose={handleEdit}
            fetchItems={fetchItems}
          />
        </div>
      </Modal>
    </>
  );
};

export default ListItem;
