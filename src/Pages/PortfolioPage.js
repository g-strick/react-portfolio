import React, { useState } from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/AllPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category))
];

function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  console.log("setCategories:", setCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <Title title={"Portfolio"} span={"Portfolio"} />

      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
