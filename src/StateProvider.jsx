//Setup data layer

import React,{createContext,useContext,useReducer} from "react" ;

//this is a the data layer
const StateContext=createContext();

//build A Provider
export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
);

// This is how we use it inside of component
export const useStateValue=()=>useContext(StateContext);