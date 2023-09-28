import { useState } from 'react';
import styles from './HomeHeader.module.scss';
import AuthPopup from '../../smart/AuthPopup/AuthPopup';

const HomeHeader = () => {
    const [isActive, setIsActive] = useState(false)
    const [isChosed, setIsChosed] = useState('');

    const handleLogin = () => {
        setIsChosed('LogIn');
        setIsActive(true);
    }

    const handleRegister = () => {
        setIsChosed('Register');
        setIsActive(true);
    }

    const handleChangeChoose = () => {
        setIsActive(false);
        setTimeout(() => {
            setIsChosed('Register');
            setIsActive(true);
        }, 400)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.top}>SPACEDEV</h1>
                <p className={styles.text}>start your way in coding by playing</p>
                <div className={styles.auth__btns}>
                    <button onClick={handleLogin} className={`${styles.btn} ${styles.login_btn}`}>Log in</button>
                    <button onClick={handleRegister} className={`${styles.btn} ${styles.registr_btn}`}>Register</button>
                </div>
            </div>
            <AuthPopup 
                active={isActive}
                setActive={setIsActive}
                isChosed={isChosed}
                handleChangeChoose={handleChangeChoose}
            />
        </header>
    )
}

export default HomeHeader