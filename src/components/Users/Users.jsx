import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css'

const Users = (props) => {
    return (
        <div key={222} className={style.users_list__wrapper}>
            <Paginator 
                onChangeCurrentPage={props.onChangeCurrentPage}
                currentPage={props.currentPage}
                totalItemsCount={props.usersCount}
                pageSize={props.pageSize}
            />
            {props.users
                .map(user => <User
                    user={user}
                    followingInProgress={props.followingInProgress}
                    getFollow={props.getFollow}
                    getUnFollow={props.getUnFollow}/>
                )}
        </div>)
}

export default Users;