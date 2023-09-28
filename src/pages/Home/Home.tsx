import AboutBlock from "../../components/ordinary/AboutBlock/AboutBlock";
import GamePrevBlock from "../../components/ordinary/GamePrevBlock/GamePrevBlock";
import HomeFooter from "../../components/ordinary/HomeFooter/HomeFooter"
import HomeHeader from "../../components/simple/HomeHeader/HomeHeader"
import SubscribeBlock from "../../components/ordinary/SubscribeBlock/SubscribeBlock";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <main>
                <AboutBlock/>
                <GamePrevBlock/>
                <SubscribeBlock/>
            </main>
            <footer>
                <HomeFooter/>
            </footer>
        </>
    )
}

export default Home;