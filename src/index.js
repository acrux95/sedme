import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers';
import App from './routes/App';

// firebaseConfig.initilizeApp = {
//   apiKey: "AIzaSyAEK43gEqnlkHFQp8yAo3Jt7PbXfZkgx_E",
//   authDomain: "sedme-f1392.firebaseapp.com",
//   databaseURL: "https://sedme-f1392.firebaseio.com",
//   projectId: "sedme-f1392",
//   storageBucket: "sedme-f1392.appspot.com",
//   messagingSenderId: "449534761471",
//   appId: "1:449534761471:web:4d9ab4e76952debff36fca",
//   measurementId: "G-N9T4L6DV6P"
// };
// const store = createStore(reducer, initialState);

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // {/* </Provider> */}
  , document.getElementById('app')
);
