import { useState } from 'react';
import classes from './footer.module.css';

import IconRightArrow from '../assets/icons/icon-right-arrow.svg';
import IconShutdown from '../assets/icons/icon-shutdown.svg';

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.content}>
                <img src={IconRightArrow} className={classes.iconRightArrow} onClick={props.hideSidebar}/>
                <div className={classes.saving}>Saving...</div>
                <img src={IconShutdown} className={classes.iconShutdown}/>
            </div>
        </div>
    );
}

export default Footer;
