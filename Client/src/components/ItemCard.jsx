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

  // console.log(search);
  console.log(name);
  console.log(search);

  if (name.toLowerCase().includes(search.toLowerCase())) {
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
  }

  if ((filter == " " && search == "") || (filter == tag && search == "")) {
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
