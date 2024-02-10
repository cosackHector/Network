import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
            if (!profileId) {
                profileId = 30739
            }
        this.props.getUserProfile(profileId)
        this.props.getStatus(profileId)
        }
    render() {
        return  (
            <Profile 
                { ...this.props } profile={this.props.profile} 
                status={this.props.status} updateStatus={this.props.updateStatus}/>
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
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect, 
)(ProfileContainer);
