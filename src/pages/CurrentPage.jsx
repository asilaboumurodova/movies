import React from "react";
import playImg from "@i/play.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useApi from "../hooks/useApi";
import { getRuntime, getYear } from "../helper";
import Cast from "../components/UI/Cast";
import Loading from "../components/UI/Loading";
function CurrentPage() {
  const { id, type } = useParams();
  const { getApi, data, loading } = useApi();
  useEffect(() => {
    getApi(`${type}/${id}?append_to_response=credits`);
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="current">
      <div className="current__content">
          <h2 className="current__title">{data.title || data.name}</h2>
          <p className="current__text">
            {data.overwview || "Описание не найден"}
          </p>
          <ul className="current__list">
            <li>
              <a href="" className="current__link">
                {getYear(data.release_date || data.first_air_date)}
              </a>
            </li>
            {data.genres?.map((genre, index) => {
              return (
                <li key={index}>
                  <a href="" className="current__link">
                    {genre.name}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="" className="current__link">
                {getRuntime(data.runtime || data.episode_run_time[0])}
              </a>
            </li>
          </ul>
          <ul className="current__casts">
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
          <button className="btn-more">
            <img src={playImg} alt="" />
            Смотерть трейлер
          </button>
        </div>
          <img
            src={import.meta.env.VITE_IMG + data.poster_path}
            alt=""
            className="current-img"
          />
        </div>
  );
}

export default CurrentPage;
