import AboutBlock from "../../components/blocks/AboutBlock/AboutBlock";
import GamePrevBlock from "../../components/blocks/GamePrevBlock/GamePrevBlock";
import HomeFooter from "../../components/blocks/HomeFooter/HomeFooter"
import HomeHeader from "../../components/blocks/HomeHeader/HomeHeader"
import SubscribeBlock from "../../components/blocks/SubscribeBlock/SubscribeBlock";


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