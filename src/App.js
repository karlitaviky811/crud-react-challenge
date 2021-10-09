import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AppRouter } from './routers/AppRouters';
import { Aside } from './components/UI/Aside';
import { Header } from './components/UI/Header';
import { loadUserList } from './actions/user';

import './styles.scss';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if ( localStorage.getItem('userList') ) {
      dispatch(loadUserList( JSON.parse(localStorage.getItem('userList'))));
    }
  }, [dispatch])

  return (
    <Router>
      <div className="app layout">
        <Aside /> 
        <main>
          <Header title={'Users'} />
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default React.memo(App);
