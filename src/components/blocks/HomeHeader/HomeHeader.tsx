import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.top}>SPACEDEV</h1>
                <p className={styles.text}>start your way in coding by playing</p>
                <div className={styles.auth__btns}>
                    <button className={`${styles.btn} ${styles.login_btn}`}>Log in</button>
                    <button className={`${styles.btn} ${styles.registr_btn}`}>Register</button>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader