import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className={styles.menu__list}>
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='cabinet'>Cabinet</Link></li>
                    <li><Link to='courses'>Courses</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;