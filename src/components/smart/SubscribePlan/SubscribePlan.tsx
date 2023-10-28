import { useState } from 'react';
import styles from './SubscribePlan.module.scss';
import Selector from '../../UI/Selector/Selector';
import { useActions } from '../../../hooks/useActions';
import { useAuth } from '../../../hooks/useAuth';

import basicImg from '../../../assets/imgs/basic-planet.png';
import ultraImg from '../../../assets/imgs/ultra-planet.png';
import AuthPopup from '../AuthPopup/AuthPopup';
import { getDatabase, ref, update } from 'firebase/database';
import { IUserData } from '../../../store/userData/userData.slice';


const SubscribePlan = () => {
    const [selectedPlan, setSelectedPlan] = useState('basic');
    const [isActive, setIsActive] = useState(false);
    const [isChosed, setIsChosed] = useState('LogIn');

    const { setUserData } = useActions();

    const userAuth = useAuth();
    const billingData = new Date();
    const endData = new Date(billingData);
    endData.setDate(billingData.getDate() + 30);

    const handleClick = () => {
        if (userAuth.isAuth) {
            const userDataUpdate: IUserData = {
                selectedPlan: selectedPlan,
            }

            setUserData(userDataUpdate);

            const database = getDatabase();
            const uid = userAuth.id
            if (uid !== null) {
                const userRef = ref(database, 'users/' + uid);

                const updates = {
                    selectedPlan: selectedPlan,
                    billingData: billingData,
                    PlanEndData: endData
                }

                update(userRef, updates)
                    .then(() => {
                        alert(`Your chose plan ${selectedPlan}`);
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error('Ошибка при покупке:', error);
                    });
            }
        } else {
            setIsActive(true);
        }
    }

    return (
        <div className={styles.block__container}>
        <div className={styles.plans}>
            <div className={styles.basic__plan}>
                <img src={basicImg} alt="basicPlanet" />
                <div>
                    <h4>BASIC</h4>
                    <ul>
                        <li>Доступ к основному сюжету</li>
                        <li>Сохранение пройденного материала для повторения</li>
                        <li>Базовые подсказки для прохождения</li>
                        <li>Получение электронных сертификатов</li>
                        <li>1 готовый авторский (сделанный вами) проект после каждой сюжетной линии</li>
                    </ul>
                </div>
            </div>
            <div className={styles.ultra__plan}>
                <img src={ultraImg} alt="ultraPlanet" />
                <div>
                    <h4>ULTRA</h4>
                    <ul>
                        <li>Доступ к основному сюжету</li>
                        <li>Сохранение пройденного материала для повторения</li>
                        <li>Получение электронных сертификатов</li>
                        <li>Ветка сюжета для подготовки к собеседованию</li>
                        <li>Дополнительные уровни с задачами из собеседований</li>
                        <li>Базовые подсказки для прохождения</li>
                        <li>2 готовых авторских (сделанных вами) проект после прохождения каждой сюжетной линии</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.lower__panel}>
            <div>
                <Selector setSelectedPlan={setSelectedPlan}/>
                <p>{selectedPlan === 'basic' ? '$9.99' : '$14.99'}</p>
            </div>
            <button onClick={handleClick} className={styles.btn}>Got it</button>
        </div>
        <AuthPopup
            isChosed={isChosed}
            active={isActive}
            setActive={setIsActive}
            setChosed={setIsChosed}
        /> 
    </div>
    )
}

export default SubscribePlan