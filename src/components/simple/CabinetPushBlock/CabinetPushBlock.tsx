import styles from './CabinetPushBlock.module.scss';
import mailIcon from '../../../assets/imgs/mail_icon.svg';


const CabinetPushBlock = () => {
    return (
        <div className={styles.block}>
            <img src={mailIcon} alt="mailIcon" />
            <h5>Push messanges</h5>
        </div>
    )
}

export default CabinetPushBlock;