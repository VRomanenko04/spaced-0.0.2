import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { loadUserData } from "../../store/userName/userName.slice";

import NavBar from "../../components/UI/NavBar/NavBar";
import CabinetFaqBlock from "../../components/ordinary/CabinetFaqBlock/CabinetFaqBlock";
import CabinetLngBlock from "../../components/ordinary/CabinetLngBlock/CabinetLngBlock";
import CabinetCoursesBlock from "../../components/simple/CabinetCoursesBlock/CabinetCoursesBlock";
import CabinetInfoBlock from "../../components/simple/CabinetInfoBlock/CabinetInfoBlock";
import CabinetPlan from "../../components/simple/CabinetPlanBlock/CabinetPlan";
import CabinetPushBlock from "../../components/simple/CabinetPushBlock/CabinetPushBlock";
import styles from './Cabinet.module.scss';



const Cabinet = () => {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        if (userData !== null) {
            const parseUserData = JSON.parse(userData);
            const uid = parseUserData.id;
    
            dispatch(loadUserData(uid))
                .then((response) => {
                    const userData = response.payload;
                    if (userData && userData.username) {
                        const fetchedUserName = userData.username;
                        setUsername(fetchedUserName);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    console.log(username);

    return (
        <section className={styles.root__style}>
            <header>
                <NavBar username={username}/>
            </header>
            <main className={styles.container}>
                <div>
                    <h2 className={styles.profile__head}>Your profile</h2>
                    <CabinetPlan/>
                    <CabinetCoursesBlock/>
                </div>
                <div className={styles.right__margin}>
                    <CabinetInfoBlock
                        username={username}
                    />
                    <CabinetPushBlock/>
                    <CabinetFaqBlock/>
                    <CabinetLngBlock/>
                </div>
            </main>
        </section>
    )
}

export default Cabinet;