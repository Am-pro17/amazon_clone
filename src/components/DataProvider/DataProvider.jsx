import { createContext, useReducer } from "react";
import {reducer} from "../../utility//reducer.js"; // Ensure you have a reducer file

export const DataContext = createContext();

const initialState = { 
  basket: [],
  user: null,
 };

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
