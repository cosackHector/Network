import { authAPI } from "../api/api";
import { getAuth } from "./auth_reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE_SUCCESS: 
            return {
                ...state,
                initialized: true
            }
        default: 
            return state;
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
    })
};

export const initializedSuccess = () => ({type: INITIALIZE_SUCCESS});

export default appReducer;