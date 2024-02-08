import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sitebar from './Sitebar/Sitebar'

const Navbar = (props) => {
    return (
    <nav className ={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users'>Users</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/musics'>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
        <Sitebar />
    </nav>
)}

    export default Navbar;