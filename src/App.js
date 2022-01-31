import './App.css';
import Navigation from './components/Navbar/Navigation';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/Content/News';
import LoginPage from "./components/Login/LoginPage"
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReduser';
import Preloader from './components/common/Preloader/Preloader';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from "./redux/redux-store"


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Content/ProfileContainer'))


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navigation/>
          <div className="content-wrapper">
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route path='/profile' element={<ProfileContainer/>}>
                  <Route path=':user_id' element={<ProfileContainer/>} />
                </Route>
                <Route path='/dialogs/*' element={<DialogsContainer/>}>
                </Route>
                <Route path='/users/*' element={<UsersContainer/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/login/*' element={<LoginPage/>}/>
              </Routes>
            </Suspense>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

const SocialNetworkApp = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  )
}

export default SocialNetworkApp