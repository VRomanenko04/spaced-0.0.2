import styles from './CabinetPlan.module.scss';
import ultraPlanet from '../../../assets/imgs/ultra-planet.png'
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/store';


const startDateStr = "2023-10-10";
const startDateComponents = startDateStr.split("-");

const CabinetPlan = () => {
    const startDate = new Date(
        parseInt(startDateComponents[0], 10), // Год
        parseInt(startDateComponents[1], 10) - 1, // Месяц (нумерация месяцев начинается с 0)
        parseInt(startDateComponents[2], 10) // День
    );

    const navigate = useNavigate();

    const chosenPlan = useSelector((state: RootState) => state.subscribePlan);
    const chosenPlanWithCapital = chosenPlan.charAt(0).toUpperCase() + chosenPlan.slice(1);

    const handleManagePlanClick = () => {
        navigate('/plans');
    };

    return (
        <section className={styles.container}>
            {chosenPlan ? (
                <>
                    <div className={styles.content__block}>
                        <img className={styles.planet} src={ultraPlanet} alt="planetImg" />
                        <div className={styles.lower__bar}>
                            <h4>{chosenPlanWithCapital}</h4>
                            <ProgressBar
                                startDate={startDate}
                            />
                        </div>
                    </div>
                    <div className={styles.manage__plan} onClick={handleManagePlanClick}>
                        <p>manage your plan</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.content_without_plan}>
                        <Link to='/plans'><h6 className={styles.choose_plan_btn}>Subscribe now</h6></Link>
                    </div>
                </>
            )}
        </section>
    )
}

export default CabinetPlan;