import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header'
import Navigation from './components/Navigation';





const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default App;
