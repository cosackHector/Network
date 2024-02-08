import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import { thunk } from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.state = store;
export default store;
