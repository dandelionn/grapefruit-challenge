import classes from './profile.module.css';
import IconUsename from '../assets/icons/icon-username.svg';
import IconName from '../assets/icons/icon-name.svg';
import IconEmail from '../assets/icons/icon-sync.svg';
import IconPassword from '../assets/icons/icon-password.svg';

const profile = {
    name: "Thomas Schneider",
    title: 'Photographer',
    email: 'thomas@invisionapp.com',
    password: '42343243242'
}

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src={IconUsename} />
                <input type="text" value={profile.name} />
            </div>
            <div>
                <img src={IconName} />
                <input type="text" value={profile.title} />
            </div>
            <div>
                <img src={IconEmail} />
                <input type="email" value={profile.email} />
            </div>
            <div>
                <img src={IconPassword} />
                <input type="password" value={profile.password} />
            </div>
        </div>
    );
}

export default Profile;