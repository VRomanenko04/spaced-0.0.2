import ChooseLng from '../../smart/ChooseLng/ChooseLng';
import styles from './RegisterForm.module.scss';
import ava from '../../../assets/imgs/Rectangle 46.png'


const RegisterForm = () => {
    return (
        <div className={styles.register__form}>
            <h2>Registration</h2> 
            <div className={styles.full__form}>
                <div className={styles.avatar}>
                    <img src={ava} alt="avatar" />
                </div>
                <form className={styles.form}>
                    <div className={styles.inputs__pos}>
                        <div className={styles.input__box}>
                            <label htmlFor="Username">Username</label>
                            <input type="text" name='Username' />
                        </div>
                        <div className={styles.input__box}>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name='Email' placeholder='yourEmail@gmail.com' />
                        </div>
                    </div>
                    <div className={styles.inputs__pos}>
                        <div className={styles.input__box}>
                            <label htmlFor="Password">Password</label>
                            <input type="password" name='Password' placeholder='********' />
                        </div>
                        <div className={styles.input__box}>
                            <label htmlFor="ConfPassword">Confirm password</label>
                            <input type="password" name='ConfPassword' placeholder='********' />
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