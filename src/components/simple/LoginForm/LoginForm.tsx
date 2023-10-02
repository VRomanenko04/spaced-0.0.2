import { useState } from 'react';
import styles from './LoginForm.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useActions } from '../../../hooks/useActions';

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

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin({
            ...userLogin,
            email: e.target.value
        });
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin({
            ...userLogin,
            password: e.target.value
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
                <div className={styles.input__box}>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email' 
                        type="email" 
                        placeholder='yourEmail@gmail.com'
                        value={userLogin.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className={styles.input__box}>
                    <label htmlFor='password'>Password</label>
                    <input 
                        name='password' 
                        type="password" 
                        placeholder='********'
                        value={userLogin.password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className={styles.btn} type='submit'>Submit</button>
            </form>
            <p className={styles.noacc}>No acc? <u onClick={handleChangeChoose}>Register</u></p>
        </div>
    )
}

export default LoginForm