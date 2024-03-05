import React, { useState } from 'react';

const buy = ({ showModal, closeModal }) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState('');

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    calculateTotalPrice(newQuantity);
  };

  const calculateTotalPrice = (newQuantity) => {
    const pricePerItem = ;
    const newTotalPrice = newQuantity * pricePerItem;
    setTotalPrice(newTotalPrice);
  };

  const handleBuyClick = () => {
    console.log('Order placed:', { item, quantity, totalPrice, address });
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Place Order</h2>
        <label>
          Item:
          <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <label>
          Total Price:
          <input type="text" value={`$${totalPrice}`} readOnly />
        </label>
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
};

export default buy;
