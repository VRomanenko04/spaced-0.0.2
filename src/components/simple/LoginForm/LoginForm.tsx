import { useState } from 'react';
import styles from './LoginForm.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useActions } from '../../../hooks/useActions';
import Input from '../../UI/Input/Input';

interface ILogin {
    handleChangeChoose: () => void
}

const LoginForm = ({ handleChangeChoose }: ILogin) => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const { setUser } = useActions();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: (user as any).accessToken,
                })
            })
            .catch(() => alert('Invalid user!'));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        });
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleLogin(userLogin.email, userLogin.password);
        setUserLogin({
            email: '',
            password: ''
        })
    }

    return (
        <div className={styles.login__form}>
            <h2>Log in</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <Input
                    idNameHtmlFor='email'
                    type='email'
                    placeholder='yourEmail@gmail.com'
                    labelText='E-mail'
                    value={userLogin.email}
                    handleChange={handleChange}
                />
                <Input
                    idNameHtmlFor='password'
                    type='password'
                    placeholder='********'
                    labelText='Password'
                    value={userLogin.password}
                    handleChange={handleChange}
                />
                <button className={styles.btn} type='submit'>Submit</button>
            </form>
            <p className={styles.noacc}>No acc? <u onClick={handleChangeChoose}>Register</u></p>
        </div>
    )
}

export default LoginForm;