import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../css/card.css";
import Buy from "../modal/buy";
import { Modal } from "@mui/material";

function DescriptionPage() {
  const userId = 8;
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [image, setImage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let { id } = useParams();
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`/api/item/info/${id}`);
        if (response.data.length === 0) {
          navigate("*");
        }
        setItem(response.data[0]);
        setImage(response.data[0].image);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenuItems();
  }, [id]);
  const itemId = parseInt(id);
  const cartPayload = { c_user_id: userId, c_item_id: itemId, quantity: 1 };

  const clickBuy = () => {
    setIsOpen(true);
  };
  const clickCart = async () => {
    try {
      const cartAdd = await axios.post("/api/cart", cartPayload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <div>
            <h1 className="mid2">{item.item_name}</h1>
            <div className="mid2">
              <div className="tag center">{item.tags}</div>
            </div>
          </div>
          <div className="card">
            <img className="image" src={`/api/${image}`} alt={item.item_name} />
            <h3 className="center name">{item.item_name}</h3>
            <span className="price center">{item.price}NRS.</span>
          </div>
        </div>
        <div className="card2">
          <p className="description">{item.description}</p>
          <br />
          <button className="btn1" onClick={clickBuy}>
            BUY NOW
          </button>
          <button className="btn2" onClick={clickCart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <div>
          <Buy itemId={id} />
        </div>
      </Modal>
    </>
  );
}

export default DescriptionPage;
