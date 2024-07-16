import { useState } from "react";
import {Dinner} from "../../dinner";
import { Lunch } from "../../user";
import { Breakfast } from "../../meal";
import MealDisplay from "../MealDisplay/MealDisplay"
import styles from "./HomeForm.module.css"
export default function HomeForm(){
    const categories = ["Breakfast","Lunch", "Dinner"];
    const [active, setActive] = useState(categories[0]);
    

    return (<>
        <div className= {styles.container}>
            <h1>Category</h1>
            <div className={styles.categories}>
            {
                <ul className={styles.list}>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`${styles.link} ${
                                active === category ? styles.active : ""
                            }`}
                            onClick={() => setActive(category)}
                        >
                            <p>{category}</p>
                        </li>
                    ))}
                </ul>
            }
            </div>
            <MealDisplay 
                meal = {Lunch}
            />
        </div>
    </>);
}