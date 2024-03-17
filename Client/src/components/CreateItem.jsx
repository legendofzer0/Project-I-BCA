import { useState } from "react";
import axios from "axios";
import "../css/dashboard.css";

import AdminSidebar from "../components/AdminSidebar";

const CreateItem = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "item_name":
        setItemName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "tags":
        setTags(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (itemName === "" || description === "" || price === "" || tags === "") {
      setError("Please fill out all fields");
    } else {
      try {
        const formData = {
          item_name: itemName,
          price: price,
          tags: tags,
          description: description,
        };

        const response = await axios.post("/api/item", formData);
        setSuccess("Item created successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("An error occurred while creating the item");
      }
    }
  };

  return (
    <>
      {/* <AdminSidebar /> */}
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Create Item</h2>
            <div className="error-message center">{error}</div>
            <div className="success-message center">{success}</div>
            <label htmlFor="item-name">Item:</label>
            <input
              type="text"
              id="item-name"
              name="item_name"
              value={itemName}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags:</label>
            <select
              className="input"
              id="tags"
              name="tags"
              value={tags}
              onChange={handleChange}
            >
              <option value="non-veg">Non-Veg</option>
              <option value="veg">Veg</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <button className="submit" type="submit">
              Create Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateItem;
