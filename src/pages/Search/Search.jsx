import styles from "./Search.module.css"
import { useState } from "react";
import { search,add } from "../../assets/index";
import Modal from "../../Components/Modal/Modal";

export default function Search() {
    const [activeButton, setActiveButton] = useState("Recipe");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    return (
        <div className={styles.main}>
            <h1>What to eat today?</h1>

            <div className={styles.button_container}>
                <button
                    className={`${styles.toggle_button} ${activeButton === 'Chefs' ? styles.active : ''}`}
                    onClick={() => setActiveButton("Chefs")}
                >
                    Chefs
                </button>
            <button
                className={`${styles.toggle_button} ${activeButton === 'Recipe' ? styles.active : ''}`}
                onClick={() => setActiveButton("Recipe")}
            >
                Recipe
            </button>
            </div>

            <form className={styles.search}>
                    <input
                        type="search"
                        placeholder={`Search ${activeButton.toLowerCase()}`}
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={search} alt="search"/>
            </form>

            <button className={styles.addButton} onClick={handleOpenModal}>
                <img src={add} alt="add"/>
                Add recipe
            </button>
            <Modal show={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}