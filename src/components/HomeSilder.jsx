import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import Loading from "../components/Loading";
import api from "../Utilis/api";

const HomeSlider = () => {
  const [sliderData, setSliderData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const baseUrl = api.defaults.baseURL;

  
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const res = await api.get(
          "api/pages/1?populate[0]=Slider&populate[1]=Slider.Image&populate[2]=Slider.MobileImage"
        );
        setSliderData(res.data.data);
      } catch (error) {
        console.error("Error fetching slider:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlider();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slider = sliderData?.attributes?.Slider;

  if (loading) return <Loading />;

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      swipeable
      className="custom-slider"
    >
      {slider?.map((images, index) => (
        <div key={index}>
          <img
            
            src={
              isMobile
                ? `${baseUrl}${images?.MobileImage?.data?.attributes?.url}`
                : `${baseUrl}${images?.Image?.data?.attributes?.url}`
            }
            alt={images?.Image?.data?.attributes?.name}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
