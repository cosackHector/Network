import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHiG = "TOGGLE_IS_FETCHiG";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  usersCount: 0,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, usersCount: action.count };
    }
    case TOGGLE_IS_FETCHiG: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id != action.userId)],
      };
    }
    default:
      return state;
  }
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    setToggleIsFetching(true);
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setToggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const getFollow = (userId) => {
  return (dispatch) => {
    toggleInFollowingProgress(true, userId);
    userAPI.unFollowing(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId));
        dispatch(toggleInFollowingProgress(false, userId));
      }
    });
  };
};
export const getUnFollow = (userId) => {
  return (dispatch) => {
    toggleInFollowingProgress(true, userId);
    userAPI.following(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(toggleInFollowingProgress(false, userId));
      }
    });
  };
};







// ACTION_CREATES
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const setToggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHiG,
  isFetching,
});
export const toggleInFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export default usersReducer;
