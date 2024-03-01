import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../css/card.css";

function DescriptionPage() {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`/api/item/info/${id}`);
        if (response.data.length === 0) {
          navigate("*");
        }
        setItem(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenuItems();
  }, [id]);
  console.log(item);

  return (
    <div className="flex">
      <div>
        <div>
          <h1 className="mid2">{item.item_name}</h1>
          <div className="mid2">
            <div className="tag center">{item.tags}</div>
          </div>
        </div>
        <div className="card">
          <img src={"../assets/" + item.image} alt={item.item_name} />
          <h3 className="center name">{item.item_name}</h3>
          <span className="price center">{item.price}NRS.</span>
        </div>
      </div>
      <div className="card2">
        <p className="description">{item.description}</p>
        <br />
        <button className="btn1">BUY NOW</button>
        <button className="btn2">ADD TO CART</button>
      </div>
    </div>
  );
}

export default DescriptionPage;
