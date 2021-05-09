import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeContainer from './Container/HomeContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  order: 0
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'HANDLE_PLUS':
      return {
        ...state,
        order: state.order + 1
      }
    case 'HANDLE_MINUS':
      var order = state.order;
      if (state.order > 0) {
        order -= 1;
      }
      return {
        ...state,
        order: order
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
