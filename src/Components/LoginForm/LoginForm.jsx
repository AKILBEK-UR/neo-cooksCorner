import styles from "./LoginForm.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
export default function LoginForm(){

    const {register, formState:{errors}, handleSubmit,} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}> 
            <div className={styles.field}>
                <label className={styles.label}>Gmail</label>
                <input
                    type="email"
                    {...register('email', {
                        required: "Must be filled."
                    }) }
                    className={styles.input}
                    placeholder="Enter email to sign in."
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Password</label>
                <input 
                    type="password"
                    {...register('password', {
                        required: "Must be filled."
                    })}
                    className={styles.input}
                    placeholder="Enter password to sign in."
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <button type="submit" className={styles.signin}>
                Sign In
            </button>
            <div className={styles.signup}>
                <p className={styles.text}>Dont have an account?</p>
                <Link to={"/register"} className={styles.text} style={{color:"#FA9E31"}}>Sign Up Now</Link>
            </div>
        </form>
        
        
    </>)
}