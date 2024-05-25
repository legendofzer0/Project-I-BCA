import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import { useNavigate, useParams } from "react-router-dom";
import "../css/card.css";
import Buy from "../modal/buy";
import { Modal } from "@mui/material";

function DescriptionPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [item, setItem] = useState([]);
  const [image, setImage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let { id } = useParams();
  const cookie = new Cookies();

  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const tokenData = cookie.get("token");
    if (!tokenData) return;

    const verifyToken = async () => {
      try {
        const response = await axios.post("/api/user/verifyToken", {
          token: tokenData,
        });
        setUserId(response.data.userId);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    verifyToken();
  }, [cookie]);
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`/api/item/info/${id}`);
        console.log(response.data);
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
      console.log(cartAdd);
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
            {/* {console.log(image)} */}
            <img className="image" src={`/api/${image}`} alt={item.item_name} />
            <h3 className="center name">{item.item_name}</h3>
            <span className="price center">{item.price}NRS.</span>
          </div>
        </div>
        <div className="card2">
          <p className="description">{item.description}</p>
          <br />
          <div>
          <button className="btn1" onClick={clickBuy}>
            BUY NOW
          </button>
          <button className="btn2" onClick={clickCart}>
            ADD TO CART
          </button>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <div>
          <Buy itemId={id} userId={userId} />
        </div>
      </Modal>
    </>
  );
}

export default DescriptionPage;
