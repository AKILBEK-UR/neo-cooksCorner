import styles from "./RegisterForm.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { registerSchema } from "../../Schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { visibleOff,visibleOn } from "../../assets";
import { useState } from "react";
import { registerAccount } from "../../store/Auth/authReducer";
import { useDispatch } from "react-redux";


export default function RegisterForm(){

    const {register, formState:{errors, isValid}, handleSubmit, reset,} = useForm({ 
        mode: "onChange",
        resolver: yupResolver(registerSchema)
       }
    );
    const [passwordVisible, setPasswordVisible ]  = useState(false);
    const dispatch = useDispatch();
    const changePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

    const onSubmit = async (data) =>{
        const value = {
            name: data.name,
            email:data.email,
            password:data.password,
        }
        console.log(value);
        try {
          await dispatch(registerAccount(value));
          console.log("Registration was successful");
        //   navigate("/login");
        } catch (error) {
          console.log("Registration failed", error);
        } finally {
          reset();
        }
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}> 
            <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <div className={`${styles.form} ${errors.password ? styles.line : "" }`}>
                    <input
                    type="text"
                    {...register('name') }
                    className={styles.input}
                    placeholder="Enter name to sign up."
                />
                </div>
                
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Gmail</label>
                <div className={`${styles.form} ${errors.password ? styles.line : "" }`}>
                     <input
                    type="email"
                    {...register('email') }
                    className={styles.input}
                    placeholder="Enter email to sign up."
                />
                </div>
               
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Password</label>
                <div className={`${styles.form} ${errors.password ? styles.line : "" }`}>
                    <input 
                    type={passwordVisible ? "text": "password"}
                    {...register('password')}
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
                 
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Re-Password</label>
                <div className={`${styles.form} ${errors.password ? styles.line : "" }`}>
                    <input 
                    type={passwordVisible ? "text" : "password"}
                    {...register('rePassword')}
                    className={styles.input}
                    placeholder="Re-Enter your password."
                />
                <img 
                        src={passwordVisible ? visibleOn : visibleOff}
                        alt="change visibility"
                        onClick={changePasswordVisibility}
                        className={styles.visible}
                    /> 
                </div>
                
                {errors.rePassword && <p className={styles.error}>{errors.rePassword.message}</p>}
            </div>
            
            <button type="submit" className={styles.signup} disabled = {!isValid} >
                Sign Up
            </button>
            <div className={styles.signin}>
                <p className={styles.text}>Already have an account?</p>
                <Link to={"/"} className={styles.text} style={{color:"#FA9E31"}}>Sign In Now</Link>
            </div>
        </form>
        
        
    </>)
}