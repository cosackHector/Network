import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unFollow, setCurrentPage,
    toggleInFollowingProgress, getUsers, getFollow, getUnFollow
} from "../../redux/users_reducer";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFetching, getFollowing, getPageSize, getUser, getUsersCount } from '../../redux/users-selectors';


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
            <Users 
                onChangeCurrentPage={this.onChangeCurrentPage}
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress} 
                getFollow={this.props.getFollow}
                getUnFollow={this.props.getUnFollow}/>
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        usersCount: getUsersCount(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowing(state),
    }
};

export default compose(connect(
    mapStateToProps, 
    {follow, unFollow, setCurrentPage, 
    toggleInFollowingProgress,
    getUsers, getFollow, getUnFollow}),
    )(UsersContainer);
