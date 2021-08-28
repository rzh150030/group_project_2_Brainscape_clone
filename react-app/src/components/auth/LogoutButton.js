import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { resetCategoryAction } from '../../store/categories';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = (e) => {
    dispatch(logout());
    dispatch(resetCategoryAction());
    history.push('/');
  };

  return <button onClick={onLogout} className="nav-button">Logout</button>;

};

export default LogoutButton;
