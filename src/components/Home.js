import React, { useState, useEffect } from "react";
import RestaurantCard from "../micro/RestaurantCard";
import HomeShimmer from "../shimmer/HomeShimmer";
const Home = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6196544&lng=85.0850272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      // Extracting list of restaurants
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRes(restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  if (res.length === 0) {
    return <HomeShimmer/>
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {res.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
      ))}
    </div>
  );
};

export default Home