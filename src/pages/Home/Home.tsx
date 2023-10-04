import AboutBlock from "../../components/ordinary/AboutBlock/AboutBlock";
import GamePrevBlock from "../../components/ordinary/GamePrevBlock/GamePrevBlock";
import HomeFooter from "../../components/ordinary/HomeFooter/HomeFooter"
import HomeHeader from "../../components/simple/HomeHeader/HomeHeader"
import SubscribeBlock from "../../components/ordinary/SubscribeBlock/SubscribeBlock";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from './Home.module.scss';


const Home = () => {
    const { isAuth } = useAuth();

    return !isAuth ? (
        <>
            <HomeHeader/>
            <main className={styles.background}>
                <AboutBlock/>
                <GamePrevBlock/>
                <SubscribeBlock/>
            </main>
            <footer className={styles.background}>
                <HomeFooter/>
            </footer>
        </>
    ) : (
        <Navigate to="/cabinet"/>
    )
}

export default Home;