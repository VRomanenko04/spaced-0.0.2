import styles from './SocialIcons.module.scss';

import discord from '../../../assets/imgs/Discord_logo.svg';
import insta from '../../../assets/imgs/Inst_logo.svg';
import facebook from '../../../assets/imgs/Facebook_logo.svg';
import React from 'react';

const SocialIcons: React.FC<{ extraClass?: string }> = (extraClass) => {
    return (
        <div className={`${styles.about_social} ${extraClass}`}>
            <a href="##">
                <img src={discord} alt="discord" />
            </a>
            <a href="##">
                <img src={insta} alt="insta" />
            </a>
            <a href="##">
                <img src={facebook} alt="facebook" />
            </a>
        </div>
    )
}

export default SocialIcons