import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Register from './Screens/register/Register';
import SideBars from './components/SideBar/SideBars';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import PostScreen from './Screens/PostScreen/PostScreen';
import WritePost from './Screens/WritePost/WritePost';
import SettingScreen from './Screens/Settings/SettingScreen';
import LoginScreen from './Screens/Login/Login';

import './App.css';
import Login from './Screens/Login/Login';
import { Container } from '@material-ui/core';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  //for testing purpose
  // const user = true

  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Switch>
            <Container>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/posts">
                <HomeScreen />
              </Route>
              <Route path="/register">
                {user ? <HomeScreen /> : <Register />}
              </Route>
              <Route path="/login">
                {user ? <HomeScreen /> : <LoginScreen />}
              </Route>
              <Route path="/post/:id">
                <PostScreen />{' '}
              </Route>
              <Route path="/post-create">
                {user ? <WritePost /> : <LoginScreen />}
              </Route>
              <Route path="/settings">
                {user ? <SettingScreen /> : <Login />}
              </Route>
            </Container>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
