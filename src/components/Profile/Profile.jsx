import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileBlockRight from './MyPosts/ProfileBlock/ProfileBlockRight';
import ProfileBlockLeft from './MyPosts/ProfileBlock/ProfileBlockLeft';


const Profile = (props) => {
    return  (
        <section className ={style.profile__main}>
            <ProfileInfo 
                profile={props.profile} status={props.status}
                updateStatus={props.updateStatus} isOwner={props.isOwner}
                savePhoto={props.savePhoto} />
            <div className={style.profile__items}>
                <ProfileBlockRight  />
                <MyPostsContainer store={props.store}/>
                <ProfileBlockLeft />
            </div>
        </section>
    )};

    export default Profile;