import NavBar from "../../components/UI/NavBar/NavBar";
import SubscribePlan from "../../components/smart/SubscribePlan/SubscribePlan";
import styles from './PlansPage.module.scss';

const PlansPage = () => {
    return (
        <>
            <header>
                <NavBar/>
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