import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import users from '../../assets/icons/users.svg';
import message from '../../assets/icons/message.svg';
import settings from '../../assets/icons/settings.svg';
import news from '../../assets/icons/news.svg';
import music from '../../assets/icons/music.svg';
// import Sitebar from './Sitebar/Sitebar'

const Navbar = (props) => {
    return (
    <nav className ={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile'>
                <i>
                    <img className={classes.icons} src={home} />
                </i>
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs'>
                <i>
                    <img className={classes.icons} src={message} />
                </i>
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users'>
                <i>
                    <img className={classes.icons} src={users} />
                </i>
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news'>
                <i>
                    <img className={classes.icons} src={news} />
                </i>
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/musics'>
                <i>
                    <img className={classes.icons} src={music} />
                </i>
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings'> 
                <i>
                    <img className={classes.icons} src={settings} />
                </i>
            </NavLink>
        </div>
        {/* <Sitebar /> */}
    </nav>
)}

    export default Navbar;