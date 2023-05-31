import React from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import img from "../../assets/menu/banner3.jpg";
import dsrtImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";
import ManuCategory from "./ManuCategory/ManuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu </title>
      </Helmet>
      <Cover img={img} title="Our Menu" />
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      <ManuCategory item={offered} title="offerd"/>        
      <ManuCategory item={dessert} title="dessert" img={dsrtImg}/>        
      <ManuCategory item={pizza} title="pizza" img={pizzaImg}/>        
      <ManuCategory item={salad} title="salad" img={saladImg}/>        
      <ManuCategory item={soup} title="soup" img={soupImg}/>        
      <ManuCategory item={drinks} title="drinks" img={img}/>        
    </div>
  );
};

export default Menu;
