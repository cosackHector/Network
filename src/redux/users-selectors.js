import { createSelector } from 'reselect';

const getUserSelector = (state) => {
    return state.usersPage.users
};


export const getUser = createSelector(getUserSelector, 
    (users) => {
    return users.filter(u => true)
});
export const getPageSize = (state) => {
    return state.usersPage.pageSize
};
export const getCurrentPage = (state) => {
    return state.usersPage.page
};
export const getUsersCount = (state) => {
    return state.usersPage.usersCount
};
export const getFetching = (state) => {
    return state.usersPage.isFetching
};
export const getFollowing = (state) => {
    return state.usersPage.followingInProgress
};