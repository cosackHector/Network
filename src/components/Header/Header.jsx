import cl from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className = {cl.app__header}>
                <div className={cl.login}>
                    { props.isAuth 
                        ? props.login 
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
    };

    export default Header;