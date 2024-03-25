import { useState } from "react";
import axios from "axios";

const ItemModal = ({ addData }) => {
  const [itemName, setItemName] = useState(addData.name);

  const [itemPicture, setItemPicture] = useState(null); // Change to null initially
  const [filename, setFilename] = useState("");
  console.log(addData);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("filename", itemPicture); // Assuming "itemImage" is the key expected by the server for the image

      const response = await axios.put(
        `/api/item/img/${addData.Id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="center middle">
        <div className="modal form">
          <h2>Add Item</h2>
          <form>
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label>Image:</label>
            <input
              type="file"
              accept=".jpg,.png"
              onChange={(e) => setItemPicture(e.target.files[0])}
            />
          </form>

          <button className="submit" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
