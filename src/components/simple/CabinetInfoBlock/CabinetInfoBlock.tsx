import styles from './CabinetInfoBlock.module.scss';
import avatar from '../../../assets/imgs/Rectangle 46.png';
import { useAuth } from '../../../hooks/useAuth';
import mashiine from '../../../assets/imgs/mashiine.svg';
import penIcon from '../../../assets/imgs/edit.png';
import { useEffect, useState } from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import { useActions } from '../../../hooks/useActions';
import { IUserData } from '../../../store/userData/userData.slice';

type UserName = {
    username: string
}

const CabinetInfoBlock = ({ username }: UserName) => {
    const [editableText, setEditableText] = useState(username);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const { setUserData } = useActions();

    useEffect(() => {
        setEditableText(username);
        setInputValue(username)
    }, [username]);

    const userInfo = useAuth();

    const startEditing = () => {
        setIsEditing(true);
    };

    const saveText = () => {
        const uid = userInfo.id;
        if (uid !== null) {
            const userDataUpdate: IUserData = {
                username: inputValue,
            }


            const database = getDatabase();
            const userRef = ref(database, 'users/' + uid);

            const updates = {
                username: inputValue,
            };

            update(userRef, updates)
                .then(() => {
                    setEditableText(inputValue);
                    setIsEditing(false);
                    setUserData(userDataUpdate);
                })
                .catch((error) => {
                    console.error('Ошибка при сохранении данных:', error);
                });
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveText();
        }
    };

    return (
        <div className={styles.block}>
            <div className={styles.ava_cont}>
                <img className={styles.ava} src={avatar} alt="avatar" />
            </div>
            <div className={styles.player__info}>
                <div className={styles.nick__user}>
                    {isEditing ? (
                        <div className={styles.editUsername}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleTextChange}
                                onKeyDown={handleKeyPress}
                                className={styles.username__input}
                            />
                            <img src={penIcon} alt="Pen" />
                        </div>
                    ) : (
                        <h6>{editableText}</h6>
                    )
                    }
                    <p>@user#22</p>
                </div>
                <p>{userInfo.email}</p>
            </div>
            {!isEditing ? (
                <div className={styles.mashiine} onClick={startEditing}>
                    <img src={mashiine} alt="mashiine" />
                </div>
            ) : (
                <div className={styles.mashiine} onClick={saveText}>
                    <img src={mashiine} alt="mashiine" />
                </div>
            )}
        </div>
    )
}

export default CabinetInfoBlock