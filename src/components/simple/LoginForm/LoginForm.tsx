import styles from './LoginForm.module.scss';

interface ILogin {
    handleChangeChoose: () => void
}

const LoginForm = ({ handleChangeChoose }: ILogin) => {
    return (
        <div className={styles.login__form}>
            <h2>Log in</h2>
            <form className={styles.form}>
                <div className={styles.input__box}>
                    <label htmlFor='email'>E-mail</label>
                    <input name='email' type="email" placeholder='yourEmail@gmail.com'/>
                </div>
                <div className={styles.input__box}>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type="password" placeholder='********'/>
                </div>
                <button className={styles.btn} type='submit'>Submit</button>
            </form>
            <p className={styles.noacc}>No acc? <u onClick={handleChangeChoose}>Register</u></p>
        </div>
    )
}

export default LoginForm