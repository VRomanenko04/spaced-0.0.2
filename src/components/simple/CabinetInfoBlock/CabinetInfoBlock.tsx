import styles from './CabinetInfoBlock.module.scss';
import avatar from '../../../assets/imgs/Rectangle 46.png';
import { useAuth } from '../../../hooks/useAuth';
import mashiine from '../../../assets/imgs/mashiine.svg';


const CabinetInfoBlock = () => {

    const userInfo = useAuth();

    return (
        <div className={styles.block}>
            <div className={styles.ava_cont}>
                <img className={styles.ava} src={avatar} alt="avatar" />
            </div>
            <div className={styles.player__info}>
                <div className={styles.nick__user}>
                    <h6>Gustavo</h6>
                    <p>@user#22</p>
                </div>
                <p>{userInfo.email}</p>
            </div>
            <div className={styles.mashiine}>
                <img src={mashiine} alt="mashiine" />
            </div>
        </div>
    )
}

export default CabinetInfoBlock