import ChooseLng from '../../smart/ChooseLng/ChooseLng';
import styles from './RegisterForm.module.scss';
import ava from '../../../assets/imgs/Rectangle 46.png'
import { useState, useEffect } from 'react';


const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        checkpass: ''
    });
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({
            ...registerForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(registerForm);
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
                                type="text" 
                                name='username' 
                                value={registerForm.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.input__box}>
                            <label htmlFor="email">Email</label>
                            <input 
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