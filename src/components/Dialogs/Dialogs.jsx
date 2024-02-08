import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message ={message.message} key={message.id}/>);
    let newMassageBody = state.newMassageBody;

    let addMassage = () => {
        props.sendMassage()
    };

    let onNewMassageChange = (event) => {
        let body = event.target.value
        props.updateNewMassageBody(body)
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMassageChange} 
                                  value={newMassageBody} 
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={addMassage}>Send massage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;