import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeContainer from './Container/Home/HomeContainer';

const getTitlePath = (pathname) => {
  let title, path = "";
  if (pathname === '/dashboard') {
    title = 'Dashboard';
    path = 'dashboard';
  } else if (pathname === '/food') {
    title = 'Foods & Drinks';
    path = 'food';
  } else if (pathname === '/bills') {
    title = 'Bills';
    path = 'bills';
  } else if (pathname === '/settings') {
    title = 'Settings';
    path = 'settings';
  } else if (pathname === '/account') {
    title = 'Account';
    path = 'account';
  } else if (pathname === '/cart') {
    title = 'Cart';
    path = 'cart';
  }
  return {
    title: title,
    path: path
  }
}


const globalState = {
  title: getTitlePath(window.location.pathname).title,
  path: getTitlePath(window.location.pathname).path,
  modshow: false,
  datamod: ""
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'HANDLE_TITLE':
      return {
        ...state,
        title: action.title,
        path: action.path
      }
    case 'HANDLE_PATH':
      return {
        ...state,
        path: getTitlePath(action.value).path,
        title: getTitlePath(action.value).title
      }
    case 'HANDLE_MOD':
      return {
        ...state,
        modshow : action.value,
        datamod : action.data
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
