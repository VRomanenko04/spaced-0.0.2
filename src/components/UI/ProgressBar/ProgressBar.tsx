import React from 'react';
import styles from './ProgressBar.module.scss';

type Data = {
    startDate: Date
}

const ProgressBar = ({startDate}: Data) => {
    const currentDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);

    // Вычисляем процент прошедшего времени
    const totalTime = Math.max(0, endDate.getTime() - startDate.getTime());
    const elapsedTime = Math.min(currentDate.getTime() - startDate.getTime(), totalTime);
    const progress = ((totalTime - elapsedTime) / totalTime) * 100;

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

export default ProgressBar