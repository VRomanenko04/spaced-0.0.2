import styles from './CabinetPlan.module.scss';
import ultraPlanet from '../../../assets/imgs/ultra-planet.png'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';


const startDateStr = "2023-10-10";
const startDateComponents = startDateStr.split("-");

const CabinetPlan = () => {
    const startDate = new Date(
        parseInt(startDateComponents[0], 10), // Год
        parseInt(startDateComponents[1], 10) - 1, // Месяц (нумерация месяцев начинается с 0)
        parseInt(startDateComponents[2], 10) // День
    );

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
                    <ProgressBar
                        startDate={startDate}
                    />
                </div>
            </div>
            <div className={styles.manage__plan} onClick={handleManagePlanClick}>
                <p>manage your plan</p>
            </div>
        </section>
    )
}

export default CabinetPlan;