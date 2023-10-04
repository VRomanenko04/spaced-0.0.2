import NavBar from "../../components/UI/NavBar/NavBar";
import CabinetPlan from "../../components/simple/CabinetPlanBlock/CabinetPlan";
import styles from './Cabinet.module.scss';

const Cabinet = () => {
    return (
        <section className={styles.root__style}>
            <header>
                <NavBar/>
            </header>
            <main className={styles.container}>
                <h2 className={styles.profile__head}>Your profile</h2>
                <CabinetPlan/>
            </main>
        </section>
    )
}

export default Cabinet