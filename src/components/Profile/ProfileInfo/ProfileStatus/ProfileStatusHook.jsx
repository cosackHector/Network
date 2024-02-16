import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.css'


const ProfileStatusHook = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    const activateAditMode = () => setEditMode(true)
    const deactivateAditMode = () => {
        setEditMode(false)
            props.updateStatus(status)
        }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    
    return ( 
        <div className={style.status_wrap}>
            {!editMode &&
                <div className={style.status_text}>
                    <span onDoubleClick={activateAditMode}>{props.status || 'No status'}</span>
                </div>}
            {editMode &&
            <div className={style.status_input}>
                <input 
                    value={status} onBlur={deactivateAditMode} 
                    autoFocus={true} onChange={onStatusChange}
                    /> 
            </div>}
        </div>
        )
    };

export default ProfileStatusHook;