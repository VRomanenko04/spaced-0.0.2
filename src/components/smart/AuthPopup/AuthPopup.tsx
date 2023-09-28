import Popup from '../../UI/Popup/Popup';
import styles from './AuthPopup.module.scss';
import RegisterForm from '../../simple/RegisterForm/RegisterForm';
import LoginForm from '../../simple/LoginForm/LoginForm';

interface IAuthPopup {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    isChosed: string
    handleChangeChoose: () => void
}

const AuthPopup = ({ active, setActive, isChosed, handleChangeChoose }: IAuthPopup) => {
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