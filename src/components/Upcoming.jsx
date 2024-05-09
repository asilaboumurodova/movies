import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Btn from "@/components/UI/Btn";
import useApi from "../hooks/useApi";
import upcomingStore from "../store/upcomingStore";
import Loading from "./UI/Loading";
import { Link } from "react-router-dom";
export default function Upcoming() {
  const line = useRef(null);
  const [nextIndex, setnextIndex] = useState(1)
  const onAutoplayTimeLeft = (s, time, progress) => {
    let width = (1 - progress) * 100;
    line.current.style.width = width + "%";
  };
  let windowScreen = window.innerWidth
  const { data, loading,getApi } = useApi();
  const { getUpcoming } = upcomingStore();
  useEffect(()=>{
    getApi(`movie/upcoming`)
  },[])
  useEffect(() => {
    getUpcoming(data);
  }, [data]);
  function activeSlideIndex(swiper) {
    if (nextIndex == 19) {
      setnextIndex(0)
    }else{
      setnextIndex(nextIndex + 1)
    }
  }

  if(loading) return <Loading/>
  return (
    <>
      <Swiper
      allowSlidePrev={false}
      onSlideNextTransitionEnd={activeSlideIndex}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".upcoming__progress",
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming__swiper"
      >
        {data?.map((film, index) => {
          return (
            <SwiperSlide className="upcoming__slide" key={index}>
              <img
                src={ (windowScreen > 575) ? import.meta.env.VITE_IMG_FULL + film.backdrop_path : import.meta.env.VITE_IMG_FULL + film.poster_path}
                alt=""
                className="upcoming__slide-img"
              />
              <h2 className="upcoming__slide-title">{film.title}</h2>
              <p className="upcoming__slide-text">{film.overview}</p>
              <Link to={`/watch/movie/${film.id}`}>
              <Btn />
              </Link>
            </SwiperSlide>
          );
        })}

        <div
          className="autoplay-progress upcoming__progress"
          slot="container-end"
        >
          <img src={import.meta.env.VITE_IMG + data[nextIndex].backdrop_path} alt="" className="upcoming__progress-img" />
          <p className="upcoming__progress-text">Следующий</p>
          <h3 className="upcoming__progress-title">{data[nextIndex].title}</h3>
          <span ref={line} className="upcoming__progress-line"></span>
        </div>
      </Swiper>
    </>
  );
}
