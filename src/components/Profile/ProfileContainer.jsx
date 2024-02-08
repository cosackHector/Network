import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 2
        }
        userAPI.getProfile(profileId)
            .then(data => {
                this.props.setUserProfile(data);
        })
    }
    render() {
        return  (
            <Profile { ...this.props } profile={this.props.profile}/>
        )}
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile 
});

function withRouter(Component) {
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

export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));