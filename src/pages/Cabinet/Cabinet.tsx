import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import CabinetFaqBlock from "../../components/ordinary/CabinetFaqBlock/CabinetFaqBlock";
import CabinetLngBlock from "../../components/ordinary/CabinetLngBlock/CabinetLngBlock";
import CabinetCoursesBlock from "../../components/simple/CabinetCoursesBlock/CabinetCoursesBlock";
import CabinetInfoBlock from "../../components/simple/CabinetInfoBlock/CabinetInfoBlock";
import CabinetPlan from "../../components/simple/CabinetPlanBlock/CabinetPlan";
import styles from './Cabinet.module.scss';
import PreLoader from "../../components/UI/PreLoader/PreLoader";



const Cabinet = () => {
    const [isLoading, setIsLoading] = useState(true);

    const username = useSelector((state: RootState) => state.userData.username);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1200);
        }
    }, [])


    return (
        <section className={styles.root__style}>
            {isLoading && (
                <PreLoader/>
            )}
            <header>
                <NavBar username={username ? username : ''}/>
            </header>
            <main className={styles.container}>
                <div>
                    <h2 className={styles.profile__head}>Your profile</h2>
                    <CabinetPlan/>
                    <CabinetCoursesBlock/>
                </div>
                <div className={styles.right__margin}>
                    <CabinetInfoBlock
                        username={username ? username : ''}
                    />
                    <CabinetFaqBlock/>
                    <CabinetLngBlock/>
                </div>
            </main>
        </section>
    )
}

export default Cabinet;