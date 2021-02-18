import React, { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav-bar ${show && "nav-scroll-black"}`}>
      <img className="nav-logo" src="/lorenzoflix-logo.png" alt="lf logo" />
      <img
        className="user-avatar"
        src="https://avatars.githubusercontent.com/u/25677557?s=400&u=a91c2723456a2f4f6349b9f06e84901faa8cff48&v=4"
        alt="Logged in users avatar"
      />
    </div>
  );
}

export default Navbar;
