import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderBg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import OrderTab from "./OrderTab";

const Order = () => {
    const categories = ["salad", "pizza","dessert","soup","drinks"];
    const {category} = useParams();
   const numeber =  categories.indexOf(category);

   const [tabs, setTabs] = useState(numeber);
  const [menu] = useMenu();

  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={OrderBg} title={"Order Food"} />
      <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
