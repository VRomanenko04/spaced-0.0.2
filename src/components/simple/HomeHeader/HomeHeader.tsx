import { useState } from 'react';
import { motion } from "framer-motion";
import styles from './HomeHeader.module.scss';
import AuthPopup from '../../smart/AuthPopup/AuthPopup';


const HomeHeader = () => {
    const [isActive, setIsActive] = useState(false)
    const [isChosed, setIsChosed] = useState('');

    const variants = {
        hidden: { background: 'rgba(0,0,0,1)' },
        visible: { background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,4,23,1) 38%, rgba(236,148,34,1) 80%, rgba(249,249,249,1) 99%)' }
    }

    const handleLogin = () => {
        setIsChosed('LogIn');
        setIsActive(true);
    }

    const handleRegister = () => {
        setIsChosed('Register');
        setIsActive(true);
    }

    return (
        <header className={styles.header}>
            <motion.div 
                className={styles.background}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}>
            </motion.div>
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
                setChosed={setIsChosed}
            />
        </header>
    )
}

export default HomeHeader