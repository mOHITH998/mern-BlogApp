import React, { createContext, useEffect, useReducer } from 'react';
import { ReducerContext as Reducer } from './ReducerContext';

export const CURRENT_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false
};

export const Context = createContext(CURRENT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, CURRENT_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
