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






const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/content' element={<Content contentPage={props.state.contentPage} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
