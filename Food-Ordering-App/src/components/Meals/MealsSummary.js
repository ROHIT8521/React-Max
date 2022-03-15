import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={classes.summary}>
        <h2>Desi स्वाधिष्ठ खाना आपके द्वार तक पहुंचाया जाएगा</h2>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs.
        </p>
      </section>
    </>
  );
};

export default MealsSummary;
