import { useState, useEffect } from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

const MenuItem = ({ item, filter }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    if (item) {
      setName(item.item_name);
      setPrice(item.price);
      setTag(item.tags);
      setImage(item.image);
      setId(item.item_id);
    }
  }, [item]);

  console.log(filter == " " || filter == tag);

  if (filter == " " || filter == tag) {
    return (
      <Link to={"/item/" + id}>
        <div className="card">
          <div className="center">
            <img className="image" src={`api/${image}`} alt={name} />
          </div>
          <h3 className="name center">{name}</h3>
          <span className="price center">{price} RS.</span>
          <div className="tagBack center">
            <span className="tag center">{tag}</span>
          </div>
        </div>
      </Link>
    );
  } else {
    return;
  }
};

export default MenuItem;
