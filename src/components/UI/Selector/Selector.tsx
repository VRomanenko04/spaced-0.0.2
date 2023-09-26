import styles from './Selector.module.scss';
import { FaAngleDown } from 'react-icons/fa';
import { Dispatch, useState } from 'react';

type SelectorProps = {
    setSelectedPlan: Dispatch<React.SetStateAction<string>>
}

const Selector = (props: SelectorProps) => {
    const [selectorBtn, changeSelectorBtn] = useState('Basic');
    const [isOptions, setIsOptions] = useState(false);

    const options = ["Basic", "Ultra"];

    const handleChangeSelect = () => {
        isOptions ? setIsOptions(false) : setIsOptions(true);
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

    const ShowList = isOptions ? `${styles.show__options}` : `${styles.off__options}`;

    return (
        <div className={styles.selector}>
            <button className={styles.select__btn} onClick={handleChangeSelect}>{selectorBtn} <FaAngleDown /></button>
            <ul className={ShowList}>
                {options.map((option, index) => (
                    <li onClick={() => handleOptionClick(option)} key={index}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Selector;