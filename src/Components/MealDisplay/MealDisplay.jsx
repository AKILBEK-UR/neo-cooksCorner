import React from "react";
import styles from "./MealDisplay.module.css";
import { Link } from "react-router-dom";
import { like, saved } from "../../assets/index";

export default function MealDisplay({ recipes }) {
  console.log(recipes)
  return (
    <div className={styles.slider__tours}>
      {recipes && recipes.length > 0 ? (
        recipes.map((tour) => (
          <Link
            key={tour.id}  // Add a unique key for each item
            className={styles.slider__tours_container}
            to={`/detail/${tour.id}`}
            style={{ backgroundImage: `url(${tour.imageUrl})` }}
          >
            <div className={styles.image_overlay}>
              <div className={styles.content}>
                <h1>{tour.name}</h1>
                <h3>by {tour.authorName}</h3>
                <div className={styles.numbers}>
                  <img src={like} alt="likes"/>
                  <h2>{tour.likesAmount}</h2>
                  <img src={saved} alt="saves"/>
                  <h2>{tour.savesAmount}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No meals available.</p>
      )}
    </div>
  );
}

