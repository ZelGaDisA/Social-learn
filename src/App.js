import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';






const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer store={props.store} />} />
            <Route path='/content' element={<Content store={props.store} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
