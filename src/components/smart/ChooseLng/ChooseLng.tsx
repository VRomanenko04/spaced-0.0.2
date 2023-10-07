import styles from './ChooseLng.module.scss'
import UA from '../../../assets/imgs/Flag_of_Ukraine.svg';
import { FaAngleDown } from 'react-icons/fa';

interface ILng {
    isArrow: boolean
}

const ChooseLng = ({isArrow}: ILng) => {
    return (
        <div className={styles.container}>
            <img src={UA} alt="UA" />
            {
                isArrow ?
                <FaAngleDown className={styles.arrow}/>
                :
                <></>
            }
        </div>
    )
}

export default ChooseLng