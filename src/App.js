import React from 'react';
import './App.css';
import ProfileContainer from './components/Content/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navbar/Navigation';
import UsersContainer from './components/Users/UsersContainer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';






const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;