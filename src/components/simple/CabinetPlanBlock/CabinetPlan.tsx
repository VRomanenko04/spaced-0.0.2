import styles from './CabinetPlan.module.scss';
import ultraPlanet from '../../../assets/imgs/ultra-planet.png'
import { Link } from 'react-router-dom';


const CabinetPlan = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content__block}>
                <img className={styles.planet} src={ultraPlanet} alt="planetImg" />
                <div className={styles.lower__bar}>
                    <h4>Ultra</h4>
                    <div className={styles.string}></div>
                </div>
            </div>
            <Link to='/plans'>
                <div className={styles.manage__plan}>
                    <p>manage your plan</p>
                </div>
            </Link>
        </section>
    )
}

export default CabinetPlan;