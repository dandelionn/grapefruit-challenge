import classes from "./sidebar.module.css";
import { useState } from 'react';
import Avatar from "./avatar";
import Profile from "./profile";
import Notifications from "./notifications";
import Footer from "./footer";

const Sidebar = (props) => {
  return (
    <div className={props.show ? [classes.sidebar, classes.enter].join(' ') : classes.sidebar}>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <Avatar />
          <Profile />
          <Notifications />
        </div>
      </div>
      <Footer hideSidebar={props.hideSidebar}/>
    </div>
  );
}

export default Sidebar;
