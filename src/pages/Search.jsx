import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";

function Search() {
  const [text, setText] = useState("");
  const { getApi, data } = useApi();
  useEffect(() => {
    const getData = setTimeout(() => {
      getApi(`search/multi?query=${text}`);
    }, 1500);
    return ()=>clearTimeout(getData)
  }, [text]);
  return (
    <div className="search container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="search-inp"
        placeholder="Find series, and movies"
      />
      <div className="movie__content ">
        {data?.map((film, index) => {
          return (
            <Link key={index} className="movie__item" to="/">
              <img
                src={import.meta.env.VITE_IMG + film.poster_path}
                alt=""
                className="movie__img"
              />
              <h2 className="movie__name">{film.name || film.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
