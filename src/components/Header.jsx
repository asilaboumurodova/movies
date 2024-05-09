import React, { useState } from "react";
import logoImg from "@i/Logo.svg";
import { router } from "../router";
import closeImg from "@i/Close.svg";
import { NavLink,Link } from "react-router-dom";
function Header() {
  const [menu, setmenu] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="logo">
            <img src={logoImg} alt="" />
          </Link>
          <button onClick={()=>setmenu(true)} className="menu">menu</button>
          <ul className={`header__list ${menu && 'active'}`}>
            <li className="close" onClick={()=>setmenu(false)}><img src={closeImg} alt="" /></li>
            {router.map((route, index) => {
             if(route.name) return (
                <li key={index}>
                  <NavLink to={route.path} className="header__link">
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
