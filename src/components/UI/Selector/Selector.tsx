import styles from './Selector.module.scss';
import { FaAngleDown } from 'react-icons/fa';
import { Dispatch, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type SelectorProps = {
    setSelectedPlan: Dispatch<React.SetStateAction<string>>
}

const Selector = (props: SelectorProps) => {
    const [selectorBtn, changeSelectorBtn] = useState('Basic');
    const [isOptions, setIsOptions] = useState(false);

    const options = ["Basic", "Ultra"];

    const handleChangeSelect = () => {
        setIsOptions(prevIsOptions => !prevIsOptions);
    }

    const handleOptionClick = (option: string) => {
        if (option === "Basic") {
            props.setSelectedPlan('basic');
        } else if (option === "Ultra") {
            props.setSelectedPlan('ultra');
        }

        changeSelectorBtn(option);
        setIsOptions(false);
    }

    return (
        <div className={styles.selector}>
            <div 
                className={styles.select__btn}
                onClick={handleChangeSelect}
            >
                {selectorBtn}
                <FaAngleDown/>
            </div>
            <AnimatePresence>
                { isOptions && (
                    <motion.ul
                        className={styles.show__options}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{
                            duration: 0.5
                        }}
                    >
                        {options.map((option, index) => (
                            <li onClick={() => handleOptionClick(option)} key={index}>
                                {option}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Selector;