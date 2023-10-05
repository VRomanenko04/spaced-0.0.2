import React from 'react';
import styles from './CabinetCoursesBlock.module.scss';
import CabinetCourse from '../CabinetCourse/CabinetCourse';
import planet from '../../../assets/imgs/basic-planet.png';

const CourseLevelEmount = {
    '1': 42,
    '2': 131,
    '3': 82,
}

const PlayerOnWhichLevel = {
    '1': 31,
    '2': 8,
    '3': 4,
}

const CabinetCoursesBlock = () => {
    return (
        <div className={styles.container}>
            <CabinetCourse
                title='Web Dev Basic'
                image={planet}
                totalLevels={CourseLevelEmount[1]}
                completedLevels={PlayerOnWhichLevel[1]}
            />
            <CabinetCourse
                title='JS'
                image={planet}
                totalLevels={CourseLevelEmount[2]}
                completedLevels={PlayerOnWhichLevel[2]}
            />
            <CabinetCourse
                title='Python'
                image={planet}
                totalLevels={CourseLevelEmount[3]}
                completedLevels={PlayerOnWhichLevel[3]}
            />
        </div>
    )
}

export default CabinetCoursesBlock