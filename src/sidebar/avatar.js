import classes from './avatar.module.css';
import IconUpload from '../assets/icons/icon-upload.svg';
import IconSync from '../assets/icons/icon-sync.svg';
import AvatarImage from '../assets/images/avatar.png';

const Avatar = () => {
    return (
        <div className={classes.avatarIcons}>
            <div className={classes.upload}>
                <img src={IconUpload} className={classes.iconUpload}/>
            </div>
            <div className={classes.avatar}>
                <img src={AvatarImage} className={classes.avatarImage} alt="Image"/>
            </div>
            <div  className={classes.sync}>
                <img src={IconSync} className={classes.iconSync}/>
            </div>
        </div>
    );
}

export default Avatar;