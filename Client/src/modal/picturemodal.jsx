import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';

const ItemModal = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemPicture, setItemPicture] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setItemPicture(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*', maxSize: 1080 * 1080 });

  const closeModal = () => {
    setItemName('');
    setItemPicture(null);
    onClose();
  };

  const handleSave = () => {
    console.log('Item Name:', itemName);
    console.log('Item Picture:', itemPicture);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Item Modal"
    >
      <h2>Add Item</h2>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </label>

      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag 'n' drop an image, or click to select a file</p>
        )}
      </div>

      {itemPicture && (
        <div>
          <p>Selected Image:</p>
          <img src={URL.createObjectURL(itemPicture)} alt="Item" style={imageStyles} />
        </div>
      )}

      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

const dropzoneStyles = {
  marginTop: '10px',
  border: '2px dashed #cccccc',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const imageStyles = {
  maxWidth: '100%',
  maxHeight: '200px',
  marginTop: '10px',
};

export default ItemModal;