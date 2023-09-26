import styles from './GamePrevBlock.module.scss';

import asteroid1 from '../../../assets/imgs/planet1.webp'
import asteroid2 from '../../../assets/imgs/planet2.webp'
import asteroid3 from '../../../assets/imgs/planet3.webp'

const GamePrevBlock = () => {
    return (
        <section className={styles.game_container}>
            <div>
                <img className={styles.asteroid1} src={asteroid1} alt="asteroid1" />
            </div>
            <div>
                <img className={styles.asteroid2} src={asteroid2} alt="asteroid2" />
            </div>
            <div>
                <img className={styles.asteroid3} src={asteroid3} alt="asteroid3" />
            </div>
        </section>
    )
}

export default GamePrevBlock