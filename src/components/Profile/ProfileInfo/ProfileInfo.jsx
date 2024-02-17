import cl from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

const onPhotoSelected = (event) => {
    if(event.target.files.length) {
        props.savePhoto(event.target.files[0]) 
    }
}
    return  (
        <section className={cl.profileInfo__container}>
            <div className ={cl.avatar__container}>
                <div className={cl.status}>
                    <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
                </div>
                <img className={cl.avatar__img} src = {props.profile.photos.large || 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'} />
                { !props.isOwner && <input type={'file'} onChange={onPhotoSelected}/> }
            </div>
            <div className={cl.description__container}>
                <div className={cl.description}>Description.</div>
            </div>
        </section>
    )};

    export default ProfileInfo;