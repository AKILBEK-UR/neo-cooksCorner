import LoginForm from "../../Components/LoginForm/LoginForm"
import HeaderForm from "../../Components/Header/HeaderForm"
import styles from "../global.module.css"
export default function Login(){


    return(<div className={styles.main}>
        <HeaderForm text = {"Welcome Back To CooksCorner "}
        />
        <LoginForm />
    </div>)
}