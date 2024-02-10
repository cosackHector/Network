import React from 'react';
import style from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateAditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateAditMode = () =>  {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value})
    }
    render() {
        return ( 
            <div className={style.status_wrap}>
                {!this.state.editMode &&
                    <div className={style.status_text}>
                        <span onDoubleClick={this.activateAditMode}>{this.props.status || 'No status'}</span>
                    </div>}
                {this.state.editMode &&
                <div className={style.status_input}>
                    <input 
                        value={this.state.status} onBlur={this.deactivateAditMode} 
                        autoFocus={true} onChange={this.onStatusChange}/> 
                </div>}
            </div>
            )
        }
    };

export default ProfileStatus;