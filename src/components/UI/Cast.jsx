import React from "react";
function Cast({ cast }) {
  return (
    <div className="cast">
      <img src={import.meta.env.VITE_IMG + cast.profile_path}
        className="cast__img"/>
      <span className="cast__name">{cast.name}</span>
    </div>
  );
}

export default Cast;
