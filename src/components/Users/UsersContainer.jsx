import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unFollow, setCurrentPage,
    toggleInFollowingProgress, getUsers, getFollow, getUnFollow
} from "../../redux/users_reducer";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //})
    };
    onChangeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //})
    };
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onChangeCurrentPage={this.onChangeCurrentPage}
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                toggleInFollowingProgress={this.props.toggleInFollowingProgress}
                followingInProgress={this.props.followingInProgress} 
                getFollow={this.props.getFollow}
                getUnFollow={this.props.getUnFollow}/>
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        usersCount: state.usersPage.usersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },

//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, toggleInFollowingProgress, getUsers, getFollow, getUnFollow
})(UsersContainer);
