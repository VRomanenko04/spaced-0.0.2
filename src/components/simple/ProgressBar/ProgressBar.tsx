import styles from './ProgressBar.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { fetchUserData } from '../../../store/apis/firebaseAPI';


const ProgressBar = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [progress, setProgress] = useState<number>();
    const [loading, setLoading] = useState(true);
    
    const authUser = useAuth();

    const currentDate = new Date();

    useEffect(() => {
        const uid = authUser.id;
        if (uid !== null) {
            const fetchData = async () => {
                try {
                    const userData = await fetchUserData(uid);

                    if (userData && userData.PlanEndData && userData.billingData) {
                        const planEndDate = new Date(userData.PlanEndData);
                        const billingDate = new Date(userData.billingData);

                        if (!isNaN(planEndDate.getTime()) && !isNaN(billingDate.getTime())) {
                            setStartDate(billingDate);
                            setEndDate(planEndDate);
                            setLoading(false);
                        } else {
                            console.log("Invalid date data in userData.");
                        }
                    } else {
                        console.log("User data not found.");
                    }
                } catch(error){
                    console.log('Ошибка при чтении данных:', error);
                }
            }
            fetchData();
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
        width: `${loading ? '0' : progress}%`,
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