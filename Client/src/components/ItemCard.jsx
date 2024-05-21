import { useState, useEffect } from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

const MenuItem = ({ item, filter, search }) => {
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

  // Filter and search logic combined
  const isVisible =
    name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === " " || filter === tag);

  if (!isVisible) return null;

  return (
    <Link to={`/item/${id}`}>
      <div className="card">
          <img className="image" type="file" src={`api/${image}`} alt={name} />
        <h3 className="name center">{name}</h3>
        <span className="price center">{price} RS.</span>
        <br />
        <div className="tagBack center">
          <span className="tag center">{tag}</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
