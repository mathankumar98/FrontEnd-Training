import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft" >
        <Link to="/">
          <img
            classname="header_icon"
            style={{
              width: "120px",
              height: "50px",
              marginTop: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingLeft: 10,
            }}
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F08%2Fmost-used-netflix-icon-boss-baby-info-tw.jpg?w=960&cbr=1&q=90&fit=max"
          />{" "}
        </Link>
        <div>
        <Link to="/movies/popular"style={{ textDecoration: "none"}}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
