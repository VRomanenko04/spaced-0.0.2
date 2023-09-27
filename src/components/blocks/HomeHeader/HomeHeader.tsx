import { useState } from 'react';
import Popup from '../../UI/Popup/Popup';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
    const [active, setActive] = useState(false)
    const [isChosed, setIsChosed] = useState('');

    const handleLogin = () => {
        setIsChosed('LogIn');
        setActive(true);
    }

    const handleRegister = () => {
        setIsChosed('Register');
        setActive(true);
    }

    const handleChangeChoose = () => {
        setActive(false);
        setTimeout(() => {
            setIsChosed('Register');
            setActive(true);
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
            <Popup extendClass={styles.popup} active={active} setActive={setActive}>
                {
                    isChosed === 'LogIn' ?
                    <div className={styles.login__form}>
                        <h1>Login</h1>
                        <p>No acc? <u onClick={handleChangeChoose}>Register</u></p>
                    </div>
                    : isChosed === 'Register' ?
                    <div className={styles.register__form}>
                        <h1>Register</h1> 
                    </div>
                    :
                    <h1>Error</h1>
                }
            </Popup>
        </header>
    )
}

export default HomeHeader