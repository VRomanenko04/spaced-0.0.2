import { useDispatch } from "react-redux";
import NavBar from "../../components/UI/NavBar/NavBar";
import SubscribePlan from "../../components/smart/SubscribePlan/SubscribePlan";
import styles from './PlansPage.module.scss';
import { AppDispatch } from "../../store/store";
import { useAuth } from "../../hooks/useAuth";
import { useUsername } from "../../hooks/useUsername";

const PlansPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authUser = useAuth();
    const username = useUsername(authUser, dispatch);


    return (
        <>
            <header>
                <NavBar username={username}/>
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