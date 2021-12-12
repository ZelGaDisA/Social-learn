import React from 'react';
import './App.css';
import ContentContainer from './components/Content/Content';
import Header from './components/Header/Header';
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
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/content' element={<ContentContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
// store={props.store} 