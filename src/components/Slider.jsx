import React, { useEffect, useState } from "react";
import ArrowImg from "@/assets/images/Arrow.svg";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useApi from "../hooks/useApi";
import popularStore from "@/store/popularStore.js";
import { Link } from "react-router-dom";
import Infoblock from "./Infoblock";
function Slider({ type }) {
  const { data, loading,getApi } = useApi();
  const { getPopular } = popularStore();
  const [infoblock, setinfoblock] = useState(false)
  const [movieId, setmovieId] = useState(null)
  useEffect(() => {
    getApi(`${type}/popular`);
  }, []); 
   useEffect(() => {
    getPopular(data, type);
  }, [data]);
  let options = {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  };
  function openInfoblock(id){
    setmovieId(id)
    setinfoblock(true)
  }
  return (
    <div className="slider">
      <h2 className="slider__title">
        {type === "movie" ? "Фильмы" : "Сереалы"} <img src={ArrowImg} alt="" />
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={23}
        breakpoints={options}
        className="mySwiper slider__swiper"
      >
        {data?.map((movie, index) => {
          return (
            <SwiperSlide onClick={()=>openInfoblock(movie.id)} key={index} className="slider__slide">
              <img
                className="slider__img"
                src={import.meta.env.VITE_IMG_FULL + movie.poster_path}
                alt=""
              />
            </SwiperSlide>
          );
        })}

        <SwiperSlide className="slider__slide">
          <Link to={`/${type}`}>
            Все {type === "movie" ? "Фильмы" : "Сереалы"}
            <img src={ArrowImg} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
     <Infoblock infoblock={infoblock} movieId={movieId} type={type} setinfoblock={setinfoblock}/>
    </div>
  );
}

export default Slider;
