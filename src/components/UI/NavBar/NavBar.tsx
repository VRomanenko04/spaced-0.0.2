import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/spaceDev_logo.svg';
import Cookies from 'js-cookie';
import { useAuth } from '../../../hooks/useAuth';
import AuthPopup from '../../smart/AuthPopup/AuthPopup';
import { useState } from 'react';

const cookieKey = 'username';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isChosed, setIsChosed] = useState('LogIn');

    const userName = Cookies.get(cookieKey);
    const isAuth = useAuth();

    return (
        <div className={styles.container}>
            <nav className={styles.menu}>
                <div className={styles.logo__container}>
                    <Link to='/'>
                        <img className={styles.logo} src={logo} alt="SpaceDev" />
                    </Link>
                </div>
                <div className={styles.right__menu}>
                    <ul className={styles.menu__list}>
                        <li></li>
                        <li><Link to='/cabinet' className={styles.menu__item}>cabinet</Link></li>
                        <li><Link to='/courses' className={styles.menu__item}>courses</Link></li>
                    </ul>
                    <div className={styles.profile}>
                        {!isAuth.isAuth ? (
                            <div onClick={() => setIsActive(true)}>Log In</div>
                        ) : (
                            <>
                                <p><strong>{userName}</strong></p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
                                </svg>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <AuthPopup
                isChosed={isChosed}
                active={isActive}
                setActive={setIsActive}
                setChosed={setIsChosed}
                withoutReg={true}
            /> 
        </div>
    )
}

export default NavBar;