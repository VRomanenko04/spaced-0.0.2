import styles from './ProgressBar.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { loadUserData } from '../../../store/userName/userName.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';


const ProgressBar = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [progress, setProgress] = useState<number>();
    
    const authUser = useAuth();
    const dispatch: AppDispatch = useDispatch();

    const currentDate = new Date();

    useEffect(() => {
        const uid = authUser.id;
        if (uid !== null) {
            dispatch(loadUserData(uid))
                .then((response) => {
                    const userData = response.payload;
                    if (userData && userData.PlanEndData && userData.billingData) {
                        const planEndDate = new Date(userData.PlanEndData);
                        const billingDate = new Date(userData.billingData);
    
                        if (!isNaN(planEndDate.getTime()) && !isNaN(billingDate.getTime())) {
                            setStartDate(billingDate);
                            setEndDate(planEndDate);
                        } else {
                            console.log("Invalid date data in userData.");
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    // Вычисляем процент прошедшего времени
    useEffect(() => {
        if (startDate !== null && endDate !== null) {
            const totalTime = Math.max(0, endDate.getTime() - startDate.getTime());
            const elapsedTime = Math.min(currentDate.getTime() - startDate.getTime(), totalTime);
            const progress = ((totalTime - elapsedTime) / totalTime) * 100;
            setProgress(progress);
        }
    }, [startDate, endDate])

    const fillerStyle = {
        width: `${progress}%`,
        height: "100%",
        borderRadius: "22px",
        background: "#ED9626",
    };


    return (
        <div className={styles.progressBarStyle}>
            <div style={fillerStyle}></div>
        </div>
    )
}

export default ProgressBar;