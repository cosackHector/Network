import cl from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return  (
    <div>
        <div className = {cl.header}>
            <img className ={cl.header_img} src = "https://uniticket.ru/wp-content/uploads/2020/11/na-plyazhe-side-ochen-plavnyy-zahod-v-more.jpg"></img>
        </div>
        
        <div className ={cl.app__main_description}>
            <img className = {cl.app__main_description_img} src = {props.profile.photos.small}></img>
            <div className={cl.description}>Description.</div>
        </div>
        <div> 
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
    )};

    export default ProfileInfo;