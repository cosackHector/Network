import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';


let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.state = store;
export default store;
