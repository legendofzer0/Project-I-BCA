
import React, { useState } from 'react';

const Kitchen = () => {
  const [pendingItems, setPendingItems] = useState([
    { itemName: 'PendingItem1' },
    { itemName: 'PendingItem2' },
  ]);

  const [cookingItems, setCookingItems] = useState([
    { itemName: 'CookingItem1' },
    { itemName: 'CookingItem2' },
  ]);

  const handlePlusClick = (section, index) => {
    if (section === 'pending') {
      const selectedItem = pendingItems[index];
      setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
      setCookingItems((prevItems) => [...prevItems, selectedItem]);
    }
  };

  return (
    <div className="kitchen">
      <div className="section">
        <h2>Pending</h2>
        <ul>
          {pendingItems.map((item, index) => (
            <li key={index}>
              {item.itemName}
              <button onClick={() => handlePlusClick('pending', index)}>Plus</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Cooking</h2>
        <ul>
          {cookingItems.map((item, index) => (
            <li key={index}>
              {item.itemName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Kitchen;
