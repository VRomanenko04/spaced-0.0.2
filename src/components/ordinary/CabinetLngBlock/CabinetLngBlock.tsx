import styles from './CabinetLngBlock.module.scss';
import planetIcon from '../../../assets/imgs/planet_icon.svg';
import ChooseLng from '../../smart/ChooseLng/ChooseLng';

const CabinetLngBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.main_info}>
                <img src={planetIcon} alt="planetIcon" />
                <h5>Language</h5>
            </div>
            <div className={styles.lng__block}>
                <ChooseLng isArrow={false}/>
            </div>
        </div>
    )
}

export default CabinetLngBlock;