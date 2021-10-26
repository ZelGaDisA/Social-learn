import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://mobile-review.com/articles/2019/image/echo-43/scr/10.jpg'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
        <a>Messages</a>
        </div>
        <div>
        <a>News</a>
        </div>
        <div>
        <a>Muzic</a>
        </div>
        <div>
        <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://vjoy.cc/wp-content/uploads/2019/08/1-22.jpg' />
        <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
      </div>
    </div>
  )
}

export default App;
