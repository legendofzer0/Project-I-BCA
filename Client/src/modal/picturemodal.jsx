import { useState } from "react";
import axios from "axios";

const ItemModal = ({ addData }) => {
  console.log(addData);
  const [itemName, setItemName] = useState(addData.name);
  const [itemPicture, setItemPicture] = useState(null); // Change to null initially
  // const [filename, setFilename] = useState(""); 
  const [error,setError]=useState("");
  // const [filename, setFilename] = useState();
  // console.log(addData);
  const handleSave = async () => {
    try {
      if(itemPicture===null){
        setError("Image Missing");
        return
      }
      const formData = new FormData();
      formData.append("filename", itemPicture); 
      const response = await axios.put(
        `/api/item/img/${addData.id}`,
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
              disabled
            />
            <label>Image:</label>
            <input
              type="file"
              accept=".jpg,.png"
              // value={itemPicture}
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
