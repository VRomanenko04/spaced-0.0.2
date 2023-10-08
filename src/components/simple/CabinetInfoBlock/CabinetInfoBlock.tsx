import styles from './CabinetInfoBlock.module.scss';
import avatar from '../../../assets/imgs/Rectangle 46.png';
import { useAuth } from '../../../hooks/useAuth';
import mashiine from '../../../assets/imgs/mashiine.svg';
import penIcon from '../../../assets/imgs/edit.png';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const defaultText = 'Gustavo';
const cookieKey = 'username';

const CabinetInfoBlock = () => {
    const [editableText, setEditableText] = useState(defaultText);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const username = Cookies.get(cookieKey);
        if (username) {
            setEditableText(username);
        }
    }, []);

    useEffect(() => {
        if (isEditing) {
            setEditableText(inputValue);
        }
    }, [inputValue, isEditing]);

    const userInfo = useAuth();

    const startEditing = () => {
        setInputValue(editableText);
        setIsEditing(true);
    };

    const saveText = () => {
        Cookies.set(cookieKey, inputValue);
        setEditableText(inputValue);
        setIsEditing(false);
        alert('Текст сохранен в куках.');
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
                                value={editableText}
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