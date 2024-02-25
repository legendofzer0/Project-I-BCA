import MenuItem from "../components/ItemCard";
import "../css/card.css";
const Homepage = () => {
  const menuItems = [
    {
      name: "Vegetarian Dish",
      price: 250,
      tag: "veg",
      description: "A delicious vegetarian dish.",
    },
    {
      name: "Vegetarian Dish",
      price: 250,
      tag: "veg",
      description: "A delicious vegetarian dish.",
      image: "image-not-found.png",
    },
    {
      name: "Vegetarian Dish",
      price: 250,
      tag: "veg",
      description: "A delicious vegetarian dish.",
      image: "image-not-found",
    },
    {
      name: "Non-Vegetarian Dish",
      priceInNepaliRupees: 300,
      tag: "nonVeg",
      description: "A tasty non-vegetarian dish.",
    },
    {
      name: "Non-Vegetarian Dish",
      priceInNepaliRupees: 300,
      tag: "nonVeg",
      description: "A tasty non-vegetarian dish.",
    },
  ];

  return (
    <div className="body">
      <h1>Welcome to Our Restaurant</h1>
      <div className="cards">
        {menuItems.map((element) => {
          // console.log("test " + element.name);
          return <MenuItem item={element} />;
        })}
      </div>
    </div>
  );
};
export default Homepage;
