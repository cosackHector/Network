import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
    posts:  [
        {id: 1, post: 'Hi, how are you?', likes: 15},
        {id: 2, post: 'It\'s my first post!!!', likes: 20},
        {id: 3, post: 'F*ck you!', likes: 200},
        {id: 4, post: 'Make America great again!!!', likes: 20000},
    ],
    newPostText: 'HELLO!',
    profile: null,
    status: '',
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
        case SET_STATUS: 
            return {
                ...state, 
                status: action.status
            }
        case SET_PHOTO: 
            return {
                ...state, 
                profile: { ...state.profile, photos: action.photoFile }
            }
        default:
            return state;
        }
    };


// THUNKS
export const getUserProfile = (profileId) => async (dispatch) => {
    const data = await userAPI.getProfile(profileId)
        dispatch(setUserProfile(data))
    };
export const getStatus = (profileId) => async (dispatch) => {
    const data = await profileAPI.getStatus(profileId)
        dispatch(setStatus(data))
    };
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
        }
    };  
export const savePhoto = (photoFile) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photoFile)
            if(response.resultCode === 0) {
                dispatch(setPhoto(response.data.photos))
        }
    };  

// ACTION_CREATES
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhoto = (photoFile) => ({type: SET_PHOTO, photoFile});

export default profileReducer;