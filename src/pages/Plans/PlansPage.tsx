import { useSelector } from "react-redux";
import NavBar from "../../components/UI/NavBar/NavBar";
import SubscribePlan from "../../components/smart/SubscribePlan/SubscribePlan";
import styles from './PlansPage.module.scss';
import { RootState } from "../../store/store";

const PlansPage = () => {
    const username = useSelector((state: RootState) => state.userData.username);

    return (
        <>
            <header>
                <NavBar username={username ? username : ''}/>
            </header>
            <main className={styles.container}>
                <div className={styles.plans_pos}>
                    <SubscribePlan/>
                </div>
            </main>
        </>
    )
}

export default PlansPage;