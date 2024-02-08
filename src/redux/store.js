import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {
            posts:  [
                {id: 1, post: 'Hi, how are you?', likes: 15},
                {id: 2, post: 'It\'s my first post!!!', likes: 20},
                {id: 3, post: 'F*ck you!', likes: 200},
                {id: 4, post: 'Make America great again!!!', likes: 20000},
            ],
            newPostText: 'HELLO!',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Im fine!!! And you?!'},
                {id: 3, message: 'How are you?!'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            dialogs:  [
                {id: 1, name: 'John'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Vladimir'},
                {id: 6, name: 'Gogi'},
            ],
            newMassageBody: '',
        },
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};

window.state = store;

export default store;