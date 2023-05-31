import React from "react";
import { Link } from 'react-router-dom';
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const ManuCategory = ({ item, title, img }) => {
  return (
    <div className="p-16">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16 ">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default ManuCategory;
