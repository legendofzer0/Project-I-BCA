import { useState, useEffect } from "react";
import MenuItem from "../components/ItemCard"; // Assuming MenuItem is the correct component
import axios from "axios";
import "../css/card.css";

const Homepage = () => {
  const [tag, setTag] = useState(" ");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

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

  // console.log(items)

  return (
    <>
    <div className="home-area">
      <div className="se-filt">
        <div className="search">
          <label htmlFor="search">Search Item: </label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="filter">
        <label htmlFor="tag">Filter: </label>
        <select id="tag" value={tag} onChange={handleTagChange}>
          <option value=" ">Select a tag</option>
          <option value="Non-Veg">Non Veg</option>
          <option value="veg">Veg</option>
        </select>
        </div>
      </div>
      <div className="body">
        <h1>Welcome to Our Restaurant</h1>
        <div className="cards">
          {console.log(items)}
          {items.map((element) => {
            return (
              <MenuItem
                key={element.id}
                item={element}
                filter={tag}
                search={search}
              />
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Homepage;
