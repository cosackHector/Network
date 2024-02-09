import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
            if (!profileId) {
                profileId = 2
            }
        this.props.getUserProfile(profileId)
        }
    render() {
        return  (
            <Profile { ...this.props } profile={this.props.profile}/>
        )}
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile 
});
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

export default connect(mapStateToProps, {getUserProfile}) (withRouter(ProfileContainer));