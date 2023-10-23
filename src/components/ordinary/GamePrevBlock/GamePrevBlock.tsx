import styles from './GamePrevBlock.module.scss';
import asteroid1 from '../../../assets/imgs/planet1.webp';
import asteroid2 from '../../../assets/imgs/planet2.webp';
import asteroid3 from '../../../assets/imgs/planet3.webp';

const asteroids = [
    {style: styles.asteroid1, src: asteroid1, alt: 'asteroid1' },
    {style: styles.asteroid2, src: asteroid2, alt: 'asteroid2' },
    {style: styles.asteroid3, src: asteroid3, alt: 'asteroid3' },
];

const GamePrevBlock = () => {

    return (
        <section className={styles.game_container}>
            {asteroids.map((_asteroid, index) => (
                <div key={index}>
                    <img
                        className={asteroids[index].style}
                        src={asteroids[index].src}
                        alt={asteroids[index].alt}
                    />
                </div>
            ))}
        </section>
    );
};

export default GamePrevBlock;