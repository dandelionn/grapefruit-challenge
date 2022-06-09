import react, { useState } from 'react';
import classes from './navbar.module.css';
import { ReactComponent as IconMenu } from '../assets/icons/icon-menu.svg';
import IconLogo from '../assets/icons/icon-logo.svg';
import IconSearch from '../assets/icons/icon-search.svg';
import IconAvatar from '../assets/icons/icon-avatar.svg';
import IconBookmark from '../assets/icons/icon-bookmark.svg';

const Navbar = (props) => {
    return ( 
        <div className={classes.navbar}>
            <div className={classes.menu}>
                <IconMenu className={classes.iconMenu}/>
                <div className={classes.title}> widgets </div>
            </div>
            <img src={IconLogo} className={classes.iconLogo} />
            <div className={classes.account}>
                <img src={IconSearch} className={classes.iconSearch}/>
                <img src={IconAvatar} className={classes.iconAvatar} onClick={props.showSidebar}/>
                <img src={IconBookmark} className={classes.iconBookmark}/>
            </div>
        </div>
    );
}

export default Navbar;