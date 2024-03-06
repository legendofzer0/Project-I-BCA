import { useState, useEffect } from "react"; // Import useState and useEffect
import MenuItem from "../components/ItemCard";
import axios from "axios";
import "../css/card.css";

const Homepage = () => {
  const [items, setItems] = useState([]);
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
          <MenuItem key={element.id} item={element} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
