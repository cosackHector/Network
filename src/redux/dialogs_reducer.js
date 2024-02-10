const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MASSAGE_BODY: 
            return {
                ...state,
                newMassageBody: action.body
            }

        case SEND_MASSAGE: 
            let body = state.newMassageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body} ],
                newMassageBody: ''
        }
            default: 
                return state;
    }
};

export const sendMassage = () => ({type: SEND_MASSAGE});
export const updateNewMassageBody = text =>({type: UPDATE_NEW_MASSAGE_BODY, body: text});

export default dialogsReducer;