import React from "react";
import mealsImage from "../../assets/pexels-devon-rockola-954677.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

//header component
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Desi भोजनालय</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </>
  );
};

export default Header;
