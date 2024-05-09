import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import popularStore from "../store/popularStore";
import useApi from "../hooks/useApi";
import ReactPaginate from 'react-paginate';
function Tv() {
  const { tv, getPopular } = popularStore();
  const { getApi, data, loading,setpage,page } = useApi();
  function changePage({selected}){
    setpage((selected + 1))
  }
  useEffect(() => {
    if (tv.length === 0 || page >= 1) {
      getApi("tv/popular");
    }
  }, [page]);
  useEffect(() => {
    if(tv.length === 0 || page >= 1){
      getPopular(data, "tv");
    }
  }, [data]);
  return (
    <div className="movie">
      <div className="container">
        <h2 className="movie__title">Все фильмы</h2>
        <div className="movie__content">
          {tv?.map((film, index) => {
            return (
              <Link key={index} className="movie__item" to={`/watch/tv/${film.id}`}>
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
        <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
      </div>
    </div>
  );
}

export default Tv