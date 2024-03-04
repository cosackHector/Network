import c from './Users.module.css';
import userPhoto from '../../assets/images/default-avatar.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, getFollow, getUnFollow}) => {
    return (
        <div className={c.user_container} key={user.id}>
            <div className={c.user_item_container}>
                <div className={c.user_avatar_container}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={c.user_avatar} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                    <div className={user_name}>{user.name}</div>
                </div>
                <div className={user_btn_container}>
                    {user.followed
                        ? <button
                            className={c.user_btn}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {getFollow(user.id) }}>UNFOLLOW</button>
                        : <button
                            className={c.user_btn}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { getUnFollow(user.id) }}>FOLLOW</button>}
                </div>
            </div>
            <div className={user_info_container}>
                <div>
                    <span>{user.status}</span>
                </div>
                <div>
                    <span>{'Страна'}</span>
                    <span>{'Город'}</span>
                </div>
            </div>
        </div>
    )};

export default User;