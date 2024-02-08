import cl from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return  (
    <div className ={cl.main}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer store={props.store}/>
    </div>
    )}

    export default Profile;