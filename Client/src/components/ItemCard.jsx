import { useState, useEffect } from "react";
import "../css/card.css";
const MenuItem = ({ item }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // console.log(item.name);
    setName(item.item_name);
    setPrice(item.price);
    setTag(item.tags);
    const timer = setTimeout(() => {
      setImage(item.image);
      // console.log(item.image);
    }, 10);
    return () => clearTimeout(timer);
  }, [item]);

  return (
    <div className="card">
      <img src={'"../assets/' + image + '"'} />
      {console.log('"../assets/' + image + '" ' + name)
      }
        <h3 className="name center">{name}</h3>
        <span className="price center">{price} RS.</span>
        <div className="tagBack center">
        <span className="tag center">{tag}</span>
        </div>
    </div>
  );
};

export default MenuItem;
