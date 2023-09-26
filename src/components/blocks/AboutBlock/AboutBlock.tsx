import styles from './AboutBlock.module.scss';
import rocket from '../../../assets/imgs/rocket.webp';
import SocialIcons from '../../UI/SocialIcons/SocialIcons';

const AboutBlock = () => {
    return (
        <section className={styles.about__container}>
        <div>
            <div className={styles.about__text}>
                <h4>SPACEDEV - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
            <SocialIcons extraClass={styles.about__social}/>
        </div>  
        <div>
            <img className={styles.rocket} src={rocket} alt="rocket" />
        </div>
    </section>
    )
}

export default AboutBlock