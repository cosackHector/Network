import c from './Users.module.css';
import userPhoto from '../../assets/images/default-avatar.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, getFollow, getUnFollow}) => {
    return (
        <section key={user.id} className={c.user__list}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={c.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                    <div>{user.name}</div>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {getFollow(user.id) }}>UNFOLLOW</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { getUnFollow(user.id) }}>FOLLOW</button>}
                </div>
            </div>
            <div>
                <span>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'Страна'}</div>
                    <div>{'Город'}</div>
                </span>
            </div>
        </section>
    )};

export default User;