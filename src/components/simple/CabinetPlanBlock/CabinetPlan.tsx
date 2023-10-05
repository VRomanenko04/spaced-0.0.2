import styles from './CabinetPlan.module.scss';
import ultraPlanet from '../../../assets/imgs/ultra-planet.png'
import { useNavigate } from 'react-router-dom';


const CabinetPlan = () => {

    const navigate = useNavigate();

    const handleManagePlanClick = () => {
        navigate('/plans');
    };

    return (
        <section className={styles.container}>
            <div className={styles.content__block}>
                <img className={styles.planet} src={ultraPlanet} alt="planetImg" />
                <div className={styles.lower__bar}>
                    <h4>Ultra</h4>
                    <div className={styles.string}></div>
                </div>
            </div>
            <div className={styles.manage__plan} onClick={handleManagePlanClick}>
                <p>manage your plan</p>
            </div>
        </section>
    )
}

export default CabinetPlan;