import styles from './CabinetPlan.module.scss';
import ultraPlanet from '../../../assets/imgs/ultra-planet.png';
import basicPlanet from '../../../assets/imgs/basic-planet.png';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


const CabinetPlan = () => {

    const navigate = useNavigate();

    const chosenPlan = useSelector((state: RootState) => state.userData.selectedPlan)
    const chosenPlanWithCapital = chosenPlan ? chosenPlan.charAt(0).toUpperCase() + chosenPlan.slice(1) : "";
    console.log(chosenPlan);

    const handleManagePlanClick = () => {
        navigate('/plans');
    };

    return (
        <section className={styles.container}>
            {chosenPlan ? (
                <>
                    <div className={styles.content__block}>
                        {chosenPlan === 'basic' && (
                            <img className={styles.planet} src={basicPlanet} alt="basicPlanet" />
                        )}
                        {chosenPlan === 'ultra' && (
                            <img className={styles.planet} src={ultraPlanet} alt="ultraPlanet" />
                        )}
                        <div className={styles.lower__bar}>
                            <h4>{chosenPlanWithCapital}</h4>
                            <ProgressBar />
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