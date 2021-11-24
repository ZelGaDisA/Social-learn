import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"





const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/content' element={<Content />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
