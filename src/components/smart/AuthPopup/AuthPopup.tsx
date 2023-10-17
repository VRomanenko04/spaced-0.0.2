import Popup from '../../UI/Popup/Popup';
import styles from './AuthPopup.module.scss';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

interface IAuthPopup {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    isChosed: string
    setChosed: React.Dispatch<React.SetStateAction<string>>
    withoutReg?: boolean
}

const AuthPopup = ({ active, setActive, isChosed, setChosed, withoutReg }: IAuthPopup) => {
    
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
                    <LoginForm handleChangeChoose={handleChangeChoose} withoutReg={withoutReg}/>
                : isChosed === 'Register' ?
                    <RegisterForm/>
                :
                <h1>Error</h1>
            }
        </Popup>
    )
}

export default AuthPopup;