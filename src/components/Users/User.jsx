import c from './Users.module.css';
import userPhoto from '../../assets/images/default-avatar.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, getFollow, getUnFollow}) => {
    return (
        <div key={user.id}>
            <span>
                <div >
                    <NavLink to={'/profile/' + user.id}>
                        <img className={c.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
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
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    )};

export default User;