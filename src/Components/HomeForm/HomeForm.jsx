import { useState, useEffect } from "react";
import { Dinner } from "../../dinner";
import { Lunch } from "../../user";
import { Breakfast } from "../../meal";
import MealDisplay from "../MealDisplay/MealDisplay";
import styles from "./HomeForm.module.css";
import axios from "axios";
export default function HomeForm() {


    const api = "https://cookscorner.fun/api/v1/categories"

    useEffect(() => {
        const getCategory = async () => {
          try {
            const accessToken = localStorage.getItem('accessToken'); // Retrieve the access token from localStorage
            const response = await axios.get('https://cookscorner.fun/api/v1/categories', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
        });
        console.log(response.data);
          } catch (error) {
            console.log("Error fetching meal details:", error.message);
          }
        };
        getCategory();
      },);
    









    const categories = ["Breakfast", "Lunch", "Dinner"];
    const categoryComponents = {
        Breakfast: Breakfast,
        Lunch: Lunch,
        Dinner: Dinner,
    };
    const [active, setActive] = useState(categories[0]);
    const [displayCategory, setDisplayCategory] = useState(categoryComponents[categories[0]]);

    const handleCategoryClick = (category) => {
        setActive(category);
        setDisplayCategory(categoryComponents[category]);
    };

    return (
        <div className={styles.container}>
            <h1>Category</h1>
            <div className={styles.categories}>
                <ul className={styles.list}>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`${styles.link} ${active === category ? styles.active : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <p>{category}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <MealDisplay meal={displayCategory} />
        </div>
    );
}
