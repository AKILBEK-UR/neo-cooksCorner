import styles from "../global.module.css"
import HeaderForm from "../../Components/Header/HeaderForm"
import RegisterForm from "../../Components/RegisterForm/RegisterForm"
export default function Register(){

    return (<div className={styles.main}>
        <HeaderForm 
            text = {"Sign up for Discoveries!"}
        />
        <RegisterForm />
    </div>)
}