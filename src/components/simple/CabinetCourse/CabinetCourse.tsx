import styles from './CabinetCourse.module.scss';

type Props = {
    title: string
    image: string
    totalLevels: number
    completedLevels: number
}

const CabinetCourse = (props: Props) => {
    const progress = (props.completedLevels / props.totalLevels) * 100
    const maxPixels = 245;

    const fillerWidth = (progress / 100) * maxPixels;

    const fillerStyle = {
        width: `${fillerWidth}px`,
        height: "100%",
        borderRadius: '10px',
        backgroundColor: "#ED9626", 
    };

    return (
        <div className={styles.block}>
            <h6>{props.title}</h6>
            <img src={props.image} alt="planet" />
            <div className={styles.progress__bar}>
                <div style={fillerStyle}></div>
            </div>
        </div>
    )
}

export default CabinetCourse;