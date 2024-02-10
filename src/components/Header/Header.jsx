import cl from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className = {cl.app__header}>
                <img className = {cl.app__header_logo} src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"/>
                <div className={cl.login}>
                    { props.isAuth 
                        ? props.login 
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
    };

    export default Header;