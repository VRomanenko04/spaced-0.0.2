import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, update } from 'firebase/database';
import { useAuth } from '../../../hooks/useAuth';
import { useActions } from '../../../hooks/useActions';
import { RootState } from '../../../store/store';
import { IUserData } from '../../../store/userData/userData.slice';

import styles from './ChooseLng.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
import UA from '../../../assets/imgs/Flag_of_Ukraine.svg';
import US from '../../../assets/imgs/Flag_of_the_United_States.svg';
import RU from '../../../assets/imgs/Flag_of_Russia.svg';


interface IArrow {
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


const ChooseLng = ({isArrow}: IArrow) => {
    const [selectedLng, setSelectedLng] = useState('us');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const userInfo = useAuth();

    const chosedDataLng = useSelector((state: RootState) => state.userData.language)

    const { setUserData } = useActions();

    const ChangeDataLng = (lngName: string) => {
        const uid = userInfo.id;
        if (uid !== null) {

            const database = getDatabase();
            const lngRef = ref(database, 'users/' + uid)

            const updates = {
                language: lngName
            };

            update(lngRef, updates)
                .then(() => {
                    const userDataUpdate: IUserData = {
                        language: lngName,
                    }

                    setUserData(userDataUpdate);
                })
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Ошибка при добавлении нового элемента language:', error);
                });
        }
    }

    useEffect(() => {
        if (chosedDataLng) {
            setSelectedLng(chosedDataLng);
        } else if (chosedDataLng === null) {
            // Если значение отсутствует в store, ставим базовым us
            const userDataUpdate: IUserData = {
                language: 'us',
            }
            
            setUserData(userDataUpdate);
        }
    }, []);

    const selectedLngData = lngs.find((lng) => lng.name === selectedLng);

    const handleSelectOpen = () => {
        setIsSelectOpen(prevIsSelectOpen => !prevIsSelectOpen);
    }

    const handleChangeLng = (lngName: string) => {
        setSelectedLng(lngName);
        setIsSelectOpen(prevIsSelectOpen => !prevIsSelectOpen);
        ChangeDataLng(lngName)
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
            <AnimatePresence mode='wait'>
                {isSelectOpen && (
                    <motion.ul 
                        className={styles.prapor__con}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{
                            duration: 0.5
                        }}
                    >
                        {lngs.map((lng, index) => (
                            selectedLng !== lng.name && (
                                <motion.li
                                    className={styles.prapor} 
                                    key={index} 
                                    onClick={() => handleChangeLng(lng.name)}
                                >
                                    <img src={lng.img} alt={lng.name}/>
                                </motion.li>
                            )
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}

export default ChooseLng;