import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import styles from './CabinetFaqBlock.module.scss';
import questIcon from '../../../assets/imgs/Question_icon.svg';
import { FaAngleDown } from 'react-icons/fa';


const FAQ = [
    {
        quest: 'How to cancel a plan renewal?',
        answer: 'Initially, renewal is disabled upon purchase, you can turn it on/off in the plan management menu.'
    },
    {
        quest: 'How can I contact project support?',
        answer: 'You can write to us at the project email or contact us on discord, where our manager will definitely answer you.'
    },
    {
        quest: 'Can I get a refund for my subscription if I paid by mistake?',
        answer: 'If less than 6 hours have passed from payment to your request, you can contact support for a refund, if the reason for the return is appropriate.'
    },
    {
        quest: 'I didn’t receive the certificate, what should I do?',
        answer: 'If you have not received a certificate by email, this may mean that the course was not 100% completed, but if you are aware that it simply did not arrive, contact our email space_dev_sup@gmail.com'
    }
];


const CabinetFaqBlock = () => {
    const [isFAQOpen, setIsFAQOpen] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const handleQuestionClick = (index: number | null) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    }

    const handleFAQOpen = () => {
        setIsFAQOpen(prevIsFAQOpen => !prevIsFAQOpen);
    }

    return (
        <>
            <div className={styles.block} onClick={handleFAQOpen}>
                <div className={styles.main_info}>
                    <img src={questIcon} alt="questionIcon" />
                    <h5>FAQ</h5>
                </div>
                <div className={styles.arrow__block}>
                    <FaAngleDown className={styles.arrow}/>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {isFAQOpen && (
                    <motion.ul 
                        className={styles.questions__block}
                        initial={{ height: 0 }}
                        animate={{ height:'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {
                            FAQ.map((question, index) => (
                                <li key={index}>
                                    <div className={`${styles.question} ${activeQuestion === index ? styles.question__active : ''}`} onClick={() => handleQuestionClick(index)}>
                                        {question.quest}
                                    </div>
                                    <AnimatePresence mode='wait'>
                                        {activeQuestion === index && (
                                            <motion.div
                                                className={styles.answer}
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                transition={{ 
                                                    duration: 0.3,
                                                    type: "spring",
                                                    damping: 13,
                                                    stiffness: 50
                                                }}
                                            >
                                                <p>
                                                    {question.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))
                        }
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}

export default CabinetFaqBlock;