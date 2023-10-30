import styles from './PreLoader.module.scss';
import preloader from '../../../assets/imgs/stars_preloader.gif';


const PreLoader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.loading_gif} src={preloader} alt="Loading..." />
        </div>
    )
}

export default PreLoader