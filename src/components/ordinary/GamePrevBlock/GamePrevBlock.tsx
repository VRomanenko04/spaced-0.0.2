import { AnimationControls, motion, useAnimation } from 'framer-motion';
import styles from './GamePrevBlock.module.scss';

import asteroid1 from '../../../assets/imgs/planet1.webp'
import asteroid2 from '../../../assets/imgs/planet2.webp'
import asteroid3 from '../../../assets/imgs/planet3.webp'
import { useEffect } from 'react';


const animations = [
    { x: 20, y: 55, style: styles.asteroid1, src: asteroid1, alt: 'asteroid1' },
    { x: 40, y: 35, style: styles.asteroid2, src: asteroid2, alt: 'asteroid2' },
    { x: -20, y: -10, style: styles.asteroid3, src: asteroid3, alt: 'asteroid3' },
];


const GamePrevBlock = () => {
    const controlsArray = animations.map(() => useAnimation());

    useEffect(() => {
        controlsArray.forEach((controls, index) => {
            animate(controls, index);
        });
    }, [controlsArray]);

    const animate = async (controls: AnimationControls, index: number) => {
        while (true) {
            await controls.start({
                x: animations[index].x,
                y: animations[index].y,
                rotate: 360,
                transition: { duration: 12, ease: "linear" },
            });
            await controls.start({
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 12, ease: "linear" },
            });
        }
    };

    return (
        <section className={styles.game_container}>
            {controlsArray.map((controls, index) => (
                <div key={index}>
                    <motion.img
                        className={animations[index].style}
                        src={animations[index].src}
                        alt={animations[index].alt}
                        animate={controls}
                    />
                </div>
            ))}
        </section>
    )
}

export default GamePrevBlock;