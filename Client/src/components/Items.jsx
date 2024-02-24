import { Link } from "react-router-dom";

const MenuItem = ({ name, priceInNepaliRupees, isVeg, description }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: NPR {priceInNepaliRupees.toFixed(2)}</p>
      <p>{isVeg ? 'Veg' : 'Non-Veg'}</p>
      <hr />
    </div>
  );
};

export default MenuItem;