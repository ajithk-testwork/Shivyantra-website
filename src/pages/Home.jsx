import React, { useState, useEffect } from "react";
import HomeSlider from "../components/HomeSilder";
import api from "../Utilis/api"; 
import Loading from "../components/Loading"; 

const Home = () => {
  const [sliderData, setSliderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    

    const fetchSliderData = async () => {
      try {
        const res = await api.get(
          `api/pages/1?populate[0]=Slider&populate[1]=Slider.Image&populate[2]=Slider.MobileImage`
        );
        setSliderData(res.data.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  if (loading) return <Loading />; // optional loading spinner

  return (
    <div className="">
      <HomeSlider sliderData={sliderData} />
     
    </div>
  );
};

export default Home;
