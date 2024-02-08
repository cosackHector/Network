import './App.css';
import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return ( 
      <div className = "app__wrapper">
        <HeaderContainer />
        <Navbar />
          <div className='app__wrapper_content'>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
              <Route path='/profile/:profileId?' element={<ProfileContainer store={props.store}/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/musics' element={<Musics/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;
