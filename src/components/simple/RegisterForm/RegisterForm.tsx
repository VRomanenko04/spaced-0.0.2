import ChooseLng from '../../smart/ChooseLng/ChooseLng';
import styles from './RegisterForm.module.scss';
import ava from '../../../assets/imgs/Rectangle 46.png'
import { useState, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        checkpass: ''
    });
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

    const { setUser } = useActions();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: (user as any).accessToken,
                })
            })
            .catch(console.error);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({
            ...registerForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleRegister(registerForm.email, registerForm.password);
        console.log(registerForm.username);
        setRegisterForm({
            username: '',
            email: '',
            password: '',
            checkpass: ''
        });
    }

    useEffect(() => {
        setIsPasswordCorrect(registerForm.password === registerForm.checkpass);
    }, [registerForm.password, registerForm.checkpass]);

    return (
        <div className={styles.register__form}>
            <h2>Registration</h2> 
            <div className={styles.full__form}>
                <div className={styles.avatar}>
                    <img src={ava} alt="avatar" />
                </div>
                <form onSubmit={handleSubmitForm} className={styles.form}>
                    <div className={styles.inputs__pos}>
                        <div className={styles.input__box}>
                            <label htmlFor="username">Username</label>
                            <input 
                                id='username'
                                type="text" 
                                name='username' 
                                value={registerForm.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.input__box}>
                            <label htmlFor="email">Email</label>
                            <input 
                                id='email'
                                type="email" 
                                name='email' 
                                placeholder='yourEmail@gmail.com' 
                                value={registerForm.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.inputs__pos}>
                        <div className={styles.input__box}>
                            <label htmlFor="password">Password</label>
                            <input 
                                id='password'
                                type="password" 
                                name='password' 
                                placeholder='********' 
                                value={registerForm.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.input__box}>
                            <label htmlFor="checkpass">Confirm password</label>
                            <input 
                                id='checkpass'
                                type="password" 
                                name='checkpass' 
                                placeholder='********' 
                                value={registerForm.checkpass}
                                onChange={handleChange}
                            />
                            {isPasswordCorrect ? 
                                <></> 
                                :
                                <p className={styles.warning}>Password mismatch</p>
                            }
                        </div>
                    </div>
                    <div>
                        <p className={styles.lng__label}>Language (You can change later):</p>
                        <ChooseLng/>
                    </div>
                    <button className={styles.btn} type='submit'>Submit</button>
                </form>
            </div>
        </div>  
    )
}

export default RegisterForm;