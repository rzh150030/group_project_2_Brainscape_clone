import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import HomePage from './components/HomePage/HomePage'
import EditDeckPage from './components/EditDeckPage/EditDeckPage';
import { authenticate } from './store/session';

import { DecksPage } from './components/DecksPage/DecksPage';
import StudyDeckPage from './components/StudyDeckPage/StudyDeckPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage/>
        </Route>
        <Route path='/deck-page/:deckId' exact={true}>
          <DecksPage />
        </Route>
        <ProtectedRoute path="/edit-deck" exact={true}>
          <EditDeckPage/>
        </ProtectedRoute>
        <ProtectedRoute path="/study-deck-page">
          <StudyDeckPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
