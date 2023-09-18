import { createContext, useContext,useReducer } from "react";
import { useState } from "react";
import siteReducer from ".//siteReducer";

 const Context= createContext()


const Provider= ({children}) => {

  const [state,dispatch] = useReducer(siteReducer,{
    theme:'light',
    language:'tr'
  })
  
    

  const data = {
   ...state,
    dispatch
  }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useSite=()=> useContext(Context)

export default Provider
