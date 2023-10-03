import ChooseLng from '../../smart/ChooseLng/ChooseLng';
import styles from './RegisterForm.module.scss';
import ava from '../../../assets/imgs/Rectangle 46.png'
import { useState, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from '../../UI/Input/Input';

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
                        <Input
                            idNameHtmlFor='username'
                            type='text'
                            labelText='Username'
                            value={registerForm.username}
                            handleChange={handleChange}
                        />
                        <Input
                            idNameHtmlFor='email'
                            type='email'
                            placeholder='yourEmail@gmail.com' 
                            labelText='E-mail'
                            value={registerForm.email}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputs__pos}>
                        <Input
                            idNameHtmlFor='password'
                            type='password'
                            placeholder='********'
                            labelText='Password'
                            value={registerForm.password}
                            handleChange={handleChange}
                        />
                        <Input
                            idNameHtmlFor='checkpass'
                            type='password'
                            placeholder='********'
                            labelText='Confirm password'
                            value={registerForm.checkpass}
                            handleChange={handleChange}
                        />
                    </div>
                    {isPasswordCorrect ? <></> 
                        :
                        <p className={styles.warning}>Password mismatch</p>
                    }
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