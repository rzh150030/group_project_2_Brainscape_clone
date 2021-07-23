import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = (e) => {
    dispatch(logout());
    history.push('/')
  };

  return <button onClick={onLogout} className="nav-button">Logout</button>;

};

export default LogoutButton;
