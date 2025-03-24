import { CDN_URL } from "../utils/constants";
import React from "react";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  return (
    <div className="w-[280px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col m-4">
      {/* Restaurant Image */}
      <img
        className="h-[180px] w-[280px] object-cover"
        alt="restaurant"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      {/* Card Content */}
      <div className="p-3">
        {/* Restaurant Name (One-line truncate) */}
        <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>

        {/* Cuisines (One-line truncate) */}
        <h4 className="text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines?.join(", ")}
        </h4>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-green-600 font-semibold">{avgRating} ⭐</h4>
          <h4 className="text-gray-800">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
