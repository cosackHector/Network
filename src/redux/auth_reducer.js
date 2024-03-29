import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: 
                return state;
    }
};

export const getAuth = () => async (dispatch) => {
    const data = await authAPI.me();
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    };

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export default authReducer;