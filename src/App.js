import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation';





const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default App;
