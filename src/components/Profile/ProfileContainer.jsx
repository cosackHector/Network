import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = this.props.authorizedId
            if (!profileId) {
                this.props.history.push('/login')
            }
        }
    this.props.getUserProfile(profileId)
    this.props.getStatus(profileId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps) {
        if(this.props.router.params.profileId != prevProps.router.params.profileId) {
        this.refreshProfile()
        }
    }
    render() {
        return  (
            <Profile 
                { ...this.props } profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus}
                isOwner={!!this.props.router.params.profileId}
                savePhoto={this.props.savePhoto}/>
        )}
};
const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                { ...props }
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
};
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect, 
)(ProfileContainer);
