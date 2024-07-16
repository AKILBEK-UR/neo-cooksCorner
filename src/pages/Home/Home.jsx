import styles from "./Home.module.css";
import HomeForm from "../../Components/HomeForm/HomeForm";
export default function Home(){
    return (
        <div className={styles.container}>
            <HomeForm />
        </div>
    );
}