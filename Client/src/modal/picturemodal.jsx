import { useState } from "react";
import axios from "axios";

const ItemModal = ({ addData }) => {
  const [itemName, setItemName] = useState(addData.name);

  const [itemPicture, setItemPicture] = useState(null); // Change to null initially
  const [filename, setFilename] = useState("");
  const [error, setError] = useState(""); // State for error message

  console.log(addData);

  const handleSave = async () => {
    try {
      if (!itemPicture) {
        setError("Please select an image");
        return;
      }

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
      window.location.reload();
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("An error occurred while uploading image");
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
              disabled
            />
            <label>Image:</label>
            <input
              type="file"
              accept=".jpg,.png"
              onChange={(e) => setItemPicture(e.target.files[0])}
            />
          </form>

          {error && <div className="error-message">{error}</div>}

          <button className="submit" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
