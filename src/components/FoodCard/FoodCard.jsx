import React from "react";

const FoodCard = ({items}) => {

    const {image, name, recipe, price} =  items;
  
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <p className="text-white p-3 m-1 absolute right-0 top-0 bg-gray-900 rounded-lg mr-5 border-white border-2">{price}</p>
          <img src={image} alt="Food Card" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
