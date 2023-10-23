import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChooseLng.module.scss'
import { get, getDatabase, ref, update } from 'firebase/database';
import { useAuth } from '../../../hooks/useAuth';
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


const ChooseLng = ({isArrow}: ILng) => {
    const [selectedLng, setSelectedLng] = useState('ua');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const userInfo = useAuth();

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
                    sessionStorage.setItem('lng', updates.language)
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Ошибка при добавлении нового элемента language:', error);
                });
        }
    }

    useEffect(() => {
        const chosedLng = sessionStorage.getItem('lng');
        if (chosedLng) {
            setSelectedLng(chosedLng);
        } else {
            // Если значение отсутствует в sessionStorage, проверьте его в базе данных Firebase
            const uid = userInfo.id;
            if (uid !== null) {
                const database = getDatabase();
                const lngRef = ref(database, 'users/' + uid);

                get(lngRef)
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const lngName = snapshot.val().language || 'us';
                            setSelectedLng(lngName);
                            sessionStorage.setItem('lng', lngName);
                        } else {
                            setSelectedLng('us');
                            sessionStorage.setItem('lng', 'us');
                        }
                    })
                    .catch((error) => {
                        console.error('Ошибка при получении языка из Firebase:', error);
                    });
            } else {
                setSelectedLng('us');
                sessionStorage.setItem('lng', 'us');
            }
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