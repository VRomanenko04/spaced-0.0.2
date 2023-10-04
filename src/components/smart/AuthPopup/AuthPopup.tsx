import Popup from '../../UI/Popup/Popup';
import styles from './AuthPopup.module.scss';
import RegisterForm from '../../simple/RegisterForm/RegisterForm';
import LoginForm from '../../simple/LoginForm/LoginForm';

interface IAuthPopup {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    isChosed: string
    setChosed: React.Dispatch<React.SetStateAction<string>>
}

const AuthPopup = ({ active, setActive, isChosed, setChosed }: IAuthPopup) => {
    
    const handleChangeChoose = () => {
        setActive(false);
        setTimeout(() => {
            setChosed('Register');
            setActive(true);
        }, 400)
    }

    return (
        <Popup extendClass={styles.popup} active={active} setActive={setActive}>
            {
                isChosed === 'LogIn' ?
                    <LoginForm handleChangeChoose={handleChangeChoose}/>
                : isChosed === 'Register' ?
                    <RegisterForm/>
                :
                <h1>Error</h1>
            }
        </Popup>
    )
}

export default AuthPopup;