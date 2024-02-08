import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth_reducer';
import { isAuth } from '../../redux/auth_reducer';

class HeaderContainer extends React.Component  {
    componentDidMount() {
        this.props.isAuth()
    }
    render() {
        return <Header { ...this.props }/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, isAuth})(HeaderContainer);