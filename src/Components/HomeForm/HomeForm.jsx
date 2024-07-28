import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, fetchCategories } from "../../store/Category/categoryReducer";
import { fetchRecipes, selectRecipes } from "../../store/recipe/recipeReducer";
import MealDisplay from "../MealDisplay/MealDisplay";
import styles from "./HomeForm.module.css";

export default function HomeForm() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const recipes = useSelector(selectRecipes);

  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchRecipes({
        categoryId: activeCategory.id,
        page: 0,  
        size: 10, 
        sort: ""
      }));
    }
  }, [activeCategory, dispatch]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.container}>
      <h1>Category</h1>
      <div className={styles.categories}>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${styles.link} ${activeCategory?.id === category.id ? styles.active : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <MealDisplay recipes={recipes} /> {/* Pass recipes to MealDisplay */}
    </div>
  );
}
