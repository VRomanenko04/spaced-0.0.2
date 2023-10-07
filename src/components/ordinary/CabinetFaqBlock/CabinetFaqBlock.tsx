import styles from './CabinetFaqBlock.module.scss';
import questIcon from '../../../assets/imgs/Question_icon.svg';
import { FaAngleDown } from 'react-icons/fa';

const CabinetFaqBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.main_info}>
                <img src={questIcon} alt="questionIcon" />
                <h5>FAQ</h5>
            </div>
            <div className={styles.arrow__block}>
                <FaAngleDown className={styles.arrow}/>
            </div>
        </div>
    )
}

export default CabinetFaqBlock