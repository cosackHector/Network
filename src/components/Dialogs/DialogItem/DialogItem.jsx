import c from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    
    return (
        <div className={c.dialog + ' ' + c.active}>
            <img className={c.dialog_img}src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;