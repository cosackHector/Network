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
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    };
    onChangeCurrentPage = (pageNumber) => {
        const {pageSize} = this.props 
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, pageSize)
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
