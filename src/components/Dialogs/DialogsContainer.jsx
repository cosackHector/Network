import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMassage, updateNewMassageBody } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

export default compose(
    connect(mapStateToProps, {sendMassage, updateNewMassageBody}),
    withAuthRedirect)(Dialogs);