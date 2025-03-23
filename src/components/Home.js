import React,{useState,useEffect} from 'react'
import RestaurantCard from '../micro/RestaurantCard'
const Home = () => {
  const [res,setRes] = useState([])
  useEffect(()=>{
      fetchApi();
  },[])
  const fetchApi = async () =>
  {
    try{
      const response =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6196544&lng=85.0850272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data =await  response.json();
      console.log(data)

      // extracting list of restaurants from the apis
      const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      console.log(restaurants)
      setRes(restaurants)
    }
    catch(error)
    {
      console.error(error)
    }
  }
  if(res.length===0)
  {
    return(
      <>
      <h1>idjidj</h1>
      </>
    )
  }
  return (
    <>
    <div className='flex flex-wrap gap-6 justify-center'>
    {res.map((restaurant) => (

  <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
))}
    </div>
    
    </>
  
   
  )
}

export default Home