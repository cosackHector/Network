import { sendMassageCreator, updateNewMassageBodyCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMassage: () => {
            dispatch(sendMassageCreator())
        },
        updateNewMassageBody: (body) => {
            dispatch(updateNewMassageBodyCreator(body))
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;