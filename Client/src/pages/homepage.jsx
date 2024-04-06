import { useState, useEffect } from "react";
import MenuItem from "../components/ItemCard"; // Assuming MenuItem is the correct component
import axios from "axios";
import "../css/card.css";

const Homepage = () => {
  const [tag, setTag] = useState(0); // Default tag to 0
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

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="tag">Filter</label>
        <select id="tag" value={tag} onChange={handleTagChange}>
          <option value=" ">Select a tag</option>
          <option value="Non-Veg">Non Veg</option>
          <option value="veg">Veg</option>
        </select>
      </div>
      <div className="body">
        <h1>Welcome to Our Restaurant</h1>
        <div className="cards">
          {console.log(items)}
          {items.map((element) => {
            return <MenuItem key={element.id} item={element} filter={tag} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
