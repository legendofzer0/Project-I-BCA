import { useState } from "react";
import axios from "axios";

const UpdateItemModal = ({ editData }) => {
  console.log(editData);
  const [itemName, setItemName] = useState(editData.name);
  const [tags, setTags] = useState(editData.tags);
  const [price, setPrice] = useState(editData.price);
  const [description, setDescription] = useState(editData.description);
  const id = editData.Id;

  const handleUpdateItem = async () => {
    const updateData = {
      item_name: itemName,
      tags: tags,
      price: price,
      description: description,
    };
    const response = await axios.put("/api/item/" + id, updateData);
    console.log(response);
    window.location.reload(false);
  };

  return (
    <>
      <div className="center middle">
        <div className="modal form">
          <h2>Update Item</h2>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label>Tags:</label>
          <select value={tags} onChange={(e) => setTags(e.target.value)}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
          <br />
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="submit" onClick={handleUpdateItem}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateItemModal;
