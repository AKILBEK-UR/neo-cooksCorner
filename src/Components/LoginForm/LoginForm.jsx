import { useState } from "react";
import styles from "./LoginForm.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { visibleOff, visibleOn } from "../../assets";
import { loginAccount } from "../../store/Auth/authReducer";
import { useDispatch } from "react-redux";

export default function LoginForm(){
    const dispatch = useDispatch()
    const {register, formState:{errors, isValid}, handleSubmit,} = useForm();
    const [passwordVisible, setPasswordVisible ]  = useState(false);
    const changePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    const onSubmit = async (data) =>{
        const value = {
            email:data.email,
            password:data.password,
        }
        try {
          await dispatch(loginAccount(value));
          console.log("Registration was successful");
        //   navigate("/login");
        } catch (error) {
          console.log("Registration failed", error);
        }
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}> 
            <div className={styles.field}>
                <label className={styles.label}>Gmail</label>
                <div className={styles.form}>
                    <input
                        type="email"
                        {...register('email', {
                            required: "Must be filled."
                        }) }
                        className={styles.input}
                        placeholder="Enter email to sign in."
                    />                        
                </div>
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Password</label>
                <div className={styles.form}>
                    <input 
                        type={passwordVisible ? "text" : "password"}
                        {...register('password', {
                            required: "Must be filled."
                        })}
                        className={styles.input}
                        placeholder="Enter password to sign in."
                    />
                    <img 
                        src={passwordVisible ? visibleOn : visibleOff}
                        alt="change visibility"
                        onClick={changePasswordVisibility}
                        className={styles.visible}
                    /> 
                </div>
            </div>
            <button type="submit" className={styles.signin} disabled = {!isValid}>
                Sign In
            </button>
            <div className={styles.signup}>
                <p className={styles.text}>Dont have an account?</p>
                <Link to={"/register"} className={styles.text} style={{color:"#FA9E31"}}>Sign Up Now</Link>
            </div>
        </form>
        
        
    </>)
}




