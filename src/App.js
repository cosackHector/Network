import React from 'react';
import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app_reducer';
import { Suspense } from 'react';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div>
        <HeaderContainer />
        <div className = 'app_container'>
          <Navbar />
            <main className='content_container'>
              <Suspense fallback={<div><Preloader /></div>}>
                <Routes>
                  <Route path='/dialogs/*' element={<DialogsContainer store={this.props.store}/>}/>
                  <Route path='/profile/:profileId?' element={<ProfileContainer store={this.props.store}/>}/>
                  <Route path='/users' element={<UsersContainer />}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/musics' element={<Musics/>}/>
                  <Route path='/settings' element={<Settings/>}/>
                  <Route path='/login' element={<Login/>}/>
                </Routes>
              </Suspense>
            </main>
          <Navbar />
        </div>
      </div>
      )
    }
  };

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initializeApp})(App));
