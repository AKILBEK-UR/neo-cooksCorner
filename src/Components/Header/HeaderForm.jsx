import styles from "./HeaderForm.module.css"

export default function HeaderForm({text}){

    return (<>
         <header className={styles.content}>
            <div className={'container'}>
                <div className={styles.text}>
                    <h1 className={styles.title}>{text}
                    </h1>
                </div>
            </div>
        </header>
    </>)
}