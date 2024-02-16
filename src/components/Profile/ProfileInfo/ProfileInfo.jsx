import cl from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return  (
        <section className={cl.profileInfo__container}>
            <div className ={cl.avatar__container}>
                <div className={cl.status}>
                        <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
                </div>
                <img className={cl.avatar__img} src = {props.profile.photos.small || 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'} />
            </div>
            <div className={cl.description__container}>
                <div className={cl.description}>Description.</div>
            </div>
        </section>
    )};

    export default ProfileInfo;