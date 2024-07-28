import { useState, useEffect } from "react";
import MealDisplay from "../MealDisplay/MealDisplay";
import styles from "./HomeForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, fetchCategories } from "../../store/Category/categoryReducer";

export default function HomeForm() {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    console.log(categories)
    useEffect(() => {
        dispatch(fetchCategories());
      }, [dispatch]);

    const [active, setActive] = useState(categories.name);

    const handleCategoryClick = (category) => {
        setActive(category);
    };

    return (
        <div className={styles.container}>
            <h1>Category</h1>
            <div className={styles.categories}>
                <ul className={styles.list}>
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className={`${styles.link} ${active === category ? styles.active : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <MealDisplay meal={displayCategory} /> */}
        </div>
    );
}
