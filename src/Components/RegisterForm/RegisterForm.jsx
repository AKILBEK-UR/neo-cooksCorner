import styles from "./RegisterForm.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { registerSchema } from "../../Schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function RegisterForm(){

    const {register, formState:{errors, isValid}, handleSubmit, reset,} = useForm({ 
        mode: "onChange",
        resolver: yupResolver(registerSchema)
       }
    );

    const onSubmit = (data) =>{
        console.log(data);
        reset();
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}> 
            <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    {...register('name') }
                    className={`${styles.input} ${errors.name ? styles.line : "" }`}
                    placeholder="Enter name to sign up."
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Gmail</label>
                <input
                    type="email"
                    {...register('email') }
                    className={`${styles.input} ${errors.email ? styles.line : "" }`}
                    placeholder="Enter email to sign up."
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Password</label>
                <input 
                    type="password"
                    {...register('password')}
                    className={`${styles.input} ${errors.password ? styles.line : "" }`}
                    placeholder="Enter password to sign in."
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Re-Password</label>
                <input 
                    type="password"
                    {...register('rePassword')}
                    className={`${styles.input} ${errors.rePassword ? styles.line : "" }`}
                    placeholder="Re-Enter your password."
                />
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