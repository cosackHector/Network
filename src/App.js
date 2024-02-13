import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import Preloader from './components/common/Preloader/Preloader';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import { initializeApp } from './redux/app_reducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return ( 
        <div className = "app__wrapper">
          <HeaderContainer />
          <Navbar />
            <div className='app__wrapper_content'>
              <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                <Route path='/profile/:profileId?' element={<ProfileContainer store={this.props.store}/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/musics' element={<Musics/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
            </div>
        </div>
      )
    }
  };

// const withRouter = (Component) => {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component {...props} router={{ location, navigate, params }} />
//     );
//   }
//   return ComponentWithRouterProp;
// };

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initializeApp})(App));
