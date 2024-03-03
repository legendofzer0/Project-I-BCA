import { useState } from "react";
import axios from "axios";

const ItemModal = ({ addData }) => {
  const [itemName, setItemName] = useState(addData.name);
  const [itemPicture, setItemPicture] = useState();
  const [filename, setFilename] = useState();
  console.log(addData);
  const handleSave = () => {
    setFilename(itemPicture);
    const response = axios.put("/api/item/img/" + addData.Id, {
      filename: filename,
    });
    console.log(response);
    console.log("Item Name:", itemName);
    console.log("Item Picture:", itemPicture);
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
              value={itemPicture}
              onChange={(e) => setItemPicture(e.target.value)}
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
