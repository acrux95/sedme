<<<<<<< HEAD

||||||| 9b59731
<<<<<<< HEAD
=======
>>>>>>> master
import React, { useReducer } from 'react';

export const GlobalContext = React.createContext();

const initialState = {
  loggedIn: {},
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalState = (props) => {
  const globalState = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
<<<<<<< HEAD

// const reducer = (state, action) => {
//     switch(action.type)
// };
export default reducer;
||||||| 9b59731
=======
const reducer = (state, action) => {
    switch(action.type)
};
export default reducer;
>>>>>>> 499ca864553c477be31100f0be033f4aef8d0c5b
=======

>>>>>>> master
