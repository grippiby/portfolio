import React, { useContext } from "react";
import style from "./Nav.module.css";
import { ScrollContext } from "../assets/scrollContext";

export const Nav = ({ activeMenu }) => {
  const links = ["home", "aboutMe", "skills", "projects", "contacts"];
  const { currentPage, setCurrentPage } = useContext(ScrollContext);
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      activeMenu();
    }
  };
  const mapedLinks = links.map((l, i) => {
    const activeLink = currentPage === l ? style.activeLink : style.link;
    return (
      <li key={l} onClick={() => handleNavClick(`${l}`)}>
        <a className={activeLink}>{l}</a>
      </li>
    );
  });
  return <ul className={style.nav}>{mapedLinks}</ul>;
};
