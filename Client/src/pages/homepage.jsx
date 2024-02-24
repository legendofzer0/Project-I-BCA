const Homepage = () => {
  // Example list of menu items
  const menuItems = [
    {
      name: 'Vegetarian Dish',
      priceInNepaliRupees: 250,
      isVeg: true,
      description: 'A delicious vegetarian dish.'
    },
    {
      name: 'Non-Vegetarian Dish',
      priceInNepaliRupees: 300,
      isVeg: false,
      description: 'A tasty non-vegetarian dish.'
    },
    // Add more menu items as needed
  ];

  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      {/* Render the MenuList component with the menuItems as a prop */}
      <MenuList items={menuItems} />
    </div>
  );
};
export default Homepage;
