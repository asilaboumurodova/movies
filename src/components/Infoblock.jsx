import React from "react";
import closeImg from "@i/Close.svg";
import Cast from "./UI/Cast";
import { useEffect } from "react";
import useApi from "../hooks/useApi";
import { getRuntime, getYear } from "../helper";
import Btn from "./UI/Btn";
import { Link } from "react-router-dom";
function Infoblock({ infoblock, movieId, type, setinfoblock }) {
  const { loading, data, getApi } = useApi();
  useEffect(() => {
    if (movieId != null) {
      getApi(`${type}/${movieId}?append_to_response=credits`);
    }
  }, [movieId]);
  if (loading) return "";
  return (
    <div className={`infoblock ${infoblock && "active"}`}>
      <button className="infoblock__close" onClick={() => setinfoblock(false)}>
        <img src={closeImg} alt="" />
      </button>
      <div className="infoblock__content">
        <h2 className="infoblock__title">{data.title || data.name}</h2>
        <p className="infoblock__text">{data.overview || "Описание не найден"}</p>
        <ul className="infoblock__list">
          <li>
            <a href="" className="infoblock__link">
              {getYear(data.release_date || data.first_air_date)}
            </a>
          </li>
          {data.genres?.map((genre, index) => {
            return (
              <li key={index}>
                <a href="" className="infoblock__link">
                  {genre.name}
                </a>
              </li>
            );
          })}
          <li>
            <a href="" className="infoblock__link">
              {getRuntime(data.runtime || data.episode_run_time[0])}
            </a>
          </li>
        </ul>
        <ul className="infoblock__casts">
          {data.credits.cast.map((cast, index) => {
            if (index < 4) {
              return (
                <li key={index}>
                  <Cast cast={cast} />
                </li>
              );
            }
          })}
        </ul>
        <Link to={`/watch/${type}/${movieId}`}>
        <Btn/>
        </Link>
      </div>
      <img
        src={import.meta.env.VITE_IMG_FULL + data.backdrop_path}
        alt=""
        className="infoblock__img"
      />
    </div>
  );
}

export default Infoblock;
