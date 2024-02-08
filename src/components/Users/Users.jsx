import c from './Users.module.css';
import userPhoto from '../../assets/images/default-avatar.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

const Users = (props) => {

    let pageCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = []
        for(let i = 1; i <= 10; i++) {
            pages.push(i)
    };

    return <div>
        <div>
        {pages.map(p => {
            return <span 
                        className={props.currentPage === p && c.selected} 
                        onClick={ () => {props.onChangeCurrentPage(p)} }>{p}
                    </span>
        })}
        </div>
        {
        props.users.map( user => 
            <div key={user.id}>
                <span>
                    <div >
                        <NavLink to={'/profile/' + user.id}>
                            <img className={c.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleInFollowingProgress(true, user.id)
                                userAPI.unFollowing(user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollow(user.id)
                                        props.toggleInFollowingProgress(false, user.id)
                                    }
                                })  
                            }}>UNFOLLOW</button> 

                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleInFollowingProgress(true, user.id)
                                userAPI.following(user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(user.id)
                                        props.toggleInFollowingProgress(false, user.id)
                                    }
                                })  
                            }}>FOLLOW</button>}
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