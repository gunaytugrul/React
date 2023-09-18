import { createContext, useContext,useReducer } from "react";
import authReducer from ".//AuthReducer";
import { useState } from "react";


 const Context= createContext()

 const initialState={
   isAuth:false,
   user:{}
 }

const Provider= ({children}) => {
    
  const[state,dispatch]=useReducer(authReducer,initialState)
  

  const data = {
   ... state,
    dispatch
  }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth=()=> useContext(Context)

export default Provider
