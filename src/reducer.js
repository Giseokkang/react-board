import React, { useReducer, createContext, useContext } from "react";
import items from "./db";
import { CREATE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      console.log([...state, { ...action.payLoad }]);
      return [...state, { ...action.payLoad }];
    default:
      return;
  }
};

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, items);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useState = () => {
  const { state } = useContext(BoardContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(BoardContext);
  return dispatch;
};

export default BoardProvider;
