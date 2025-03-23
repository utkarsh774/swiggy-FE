import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo
  } = resData;

  return (
    <div
      className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col"
    >
      {/* Image */}
      <img
        className="h-[180px] w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-lg truncate w-full">{name}</h3>
        <h4 className="text-gray-600 text-sm truncate w-full">
          {cuisines?.join(", ") || "No cuisines available"}
        </h4>
        <h4 className="text-yellow-500 font-semibold">{avgRating} ⭐</h4>
        <h4 className="text-gray-700">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard