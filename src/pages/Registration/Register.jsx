import styles from "./Register.module.css"
import HeaderForm from "../../Components/Header/HeaderForm"
import RegisterForm from "../../Components/RegisterForm/RegisterForm"
export default function Register(){

    return (<>
        <HeaderForm 
            text = {"Sign up for Discoveries!"}
        />
        <RegisterForm />
    </>)
}