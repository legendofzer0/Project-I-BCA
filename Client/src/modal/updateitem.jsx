import { useState } from "react";

const UpdateItemModal = ({ isOpen, onClose, currentItem }) => {
  const [itemName, setItemName] = useState(currentItem.name || "");
  const [tags, setTags] = useState(currentItem.tags || []);
  const [price, setPrice] = useState(currentItem.price || "");
  const [description, setDescription] = useState(currentItem.description || "");

  const handleTagChange = (selectedTags) => {
    setTags(selectedTags);
  };

  const handleUpdateItem = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="">
          <div className="">
            <h2>Update Item</h2>
            <label>
              Item Name:
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </label>
            <label>
              Tags:
              <input type="text" value={tags.join(",")} readOnly />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <button onClick={handleUpdateItem}>Update</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateItemModal;
