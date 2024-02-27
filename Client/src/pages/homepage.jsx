import { useState, useEffect } from 'react'; // Import useState and useEffect
import MenuItem from "../components/ItemCard";
import axios from 'axios';
import "../css/card.css";

const Homepage = () => {
  const [items, setItems] = useState([]); // State to hold menu items

  // Effect to fetch menu items when the component mounts
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("/api/item");
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenuItems();
  }, []); 
  return (
    <div className="body">
      <h1>Welcome to Our Restaurant</h1>
      <div className="cards">
        {items.map((element) => (
          <MenuItem key={element.id} item={element} /> // Assuming each element has a unique 'id' for the key
        ))}
      </div>
    </div>
  );
};

export default Homepage;
