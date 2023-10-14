import { useEffect, useState } from 'react';
import styles from './ChooseLng.module.scss'
import Cookies from 'js-cookie';
import { FaAngleDown } from 'react-icons/fa';

import UA from '../../../assets/imgs/Flag_of_Ukraine.svg';
import US from '../../../assets/imgs/Flag_of_the_United_States.svg';
import RU from '../../../assets/imgs/Flag_of_Russia.svg';

interface ILng {
    isArrow: boolean
}

const lngs = [
    {
        name: 'us',
        img: US
    },
    {
        name: 'ua',
        img: UA
    },
    {
        name: 'ru',
        img: RU
    }
];

const cookieKey = 'language';

const ChooseLng = ({isArrow}: ILng) => {
    const [selectedLng, setSelectedLng] = useState('ua');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    useEffect(() => {
        const chosedLng = Cookies.get(cookieKey);
        if (chosedLng) {
            setSelectedLng(chosedLng);
        }
    }, []);

    const selectedLngData = lngs.find((lng) => lng.name === selectedLng);

    const handleSelectOpen = () => {
        setIsSelectOpen(prevIsSelectOpen => !prevIsSelectOpen);
    }

    const handleChangeLng = (lngName: string) => {
        setSelectedLng(lngName);
        setIsSelectOpen(prevIsSelectOpen => !prevIsSelectOpen);
        Cookies.set(cookieKey, lngName);
        window.location.reload();
    }

    return (
        <>
            <div className={styles.container} onClick={handleSelectOpen}>
                {selectedLngData && (
                    <img src={selectedLngData.img} alt={selectedLng} />
                )}
                {
                    isArrow ?
                    <FaAngleDown className={styles.arrow} />
                    : <></>
                }
            </div>
            {isSelectOpen && (
                <ul className={styles.prapor__con}>
                    {
                        lngs.map((lng, index) => (
                            selectedLng !== lng.name && (
                                <li className={styles.prapor} key={index} onClick={() => handleChangeLng(lng.name)}>
                                    <img src={lng.img} alt={lng.name}/>
                                </li>
                            )
                        ))
                    }
                </ul>
            )
            }
        </>
    )
}

export default ChooseLng;