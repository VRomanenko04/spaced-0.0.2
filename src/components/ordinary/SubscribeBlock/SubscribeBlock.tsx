import SubscribePlan from '../../smart/SubscribePlan/SubscribePlan';
import styles from './SubscribeBlock.module.scss';

const SubscribeBlock = () => {
    return (
        <section className={styles.subscribe__block}>
            <SubscribePlan/>
        </section>
    )
}

export default SubscribeBlock;