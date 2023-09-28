import SocialIcons from '../../UI/SocialIcons/SocialIcons';
import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <h4>
                    SPACEDEV - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
            <div className={styles.social_position}>
                <SocialIcons/>
            </div>
        </div>
    )
}

export default HomeFooter