import c from './Users.module.css';
import userPhoto from '../../assets/images/default-avatar.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pageCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    };

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && c.selected}
                    onClick={() => { props.onChangeCurrentPage(p) }}>{p}
                </span>
            })}
        </div>
        {
            props.users.map(user =>
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
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {props.getFollow(user.id)}}>UNFOLLOW</button>
                                : <button 
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {props.getUnFollow(user.id)}}>FOLLOW</button>}
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
                </div>)
        }
    </div>
}

export default Users;