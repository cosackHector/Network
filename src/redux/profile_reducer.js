import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:  [
        {id: 1, post: 'Hi, how are you?', likes: 15},
        {id: 2, post: 'It\'s my first post!!!', likes: 20},
        {id: 3, post: 'F*ck you!', likes: 200},
        {id: 4, post: 'Make America great again!!!', likes: 20000},
    ],
    newPostText: 'HELLO!',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let post = {
                id: 5,
                post: state.newPostText,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: '' 
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: 
            return {
                ...state, 
                profile: action.profile
            }
        default:
            return state;
        }
    };

export const getUserProfile = (profileId) => {
    return (dispatch) => {
        userAPI.getProfile(profileId)
            .then(data => {
                dispatch(setUserProfile(data))
        })
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;