import React, { useState, useEffect } from "react";
import netflixImg from "./assets/download.png";
import menu from "./assets/images (1).jpg";

const Header = ({ setQuery }) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  const searchBar = (value) => {
    return setQuery(value);
  };

  return (
    <nav
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "20px",
      }}
      className={`navbar navbar-expand-lg  ${show && "nav_black"}`}
    >
      <img
        src={netflixImg}
        alt="logo"
        style={{ width: "150px", height: "60px" }}
      />
      <input
        type="search"
        placeholder="Search A movie"
        className="searchBar"
        onChange={(e) => searchBar(e.target.value)}
      />
    </nav>
  );
};

export default Header;
