import React from "react";
import styles from "./MealDisplay.module.css";
import { Link } from "react-router-dom";
import {like, saved} from "../../assets/index"
export default function MealDisplay({ meal }){
  return (
    <div className={styles.slider__tours}>
      {meal ? (
        meal.map((tour) => (
            <Link
              className={styles.slider__tours_container}
              to={`/detail/${tour.id}`}
              style={{ backgroundImage: `url(${tour.image})` }}
            >
              <div className={styles.image_overlay}>
                <div className={styles.content}>
                  <h1 >{tour.title}</h1>
                  <h3>by {tour.author}</h3>
                  <div className={styles.numbers}>
                    <img src={like}/>
                    <h2>{tour.likes}</h2>
                    <img src={saved}/>
                    <h2>{tour.saved}</h2> 
                  </div>
                </div>
                
              </div>
            </Link>
        ))
      ) : (
        <p>No tours available.</p>
      )}
    </div>
  );
};
