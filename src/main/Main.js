import React from "react";
import style from "./Main.module.css";
import portfolioPhoto from "../common/photos/mainPhoto/IMG_0039-removebg-preview.png";

export const Main = () => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home" className={style.mainBlock}>
      <div className={style.mainContainer}>
        <img className={style.portfolioPhoto} src={portfolioPhoto} alt="" />
        <div className={style.infoContainer}>
          <div className={style.info}>
            <span>Hi There!</span>
            <h1> I am Svyatoslav Nilikovsky</h1>
            <p>A Frontend Developer</p>
          </div>
          <div className={style.buttonContainer}>
            <button
              onClick={() => handleNavClick("contacts")}
              className={style.buttonContact}
            >
              Contact Me
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className={style.buttonView}
            >
              View My Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
