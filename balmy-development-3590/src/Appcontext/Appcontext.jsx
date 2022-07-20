import { createContext } from "react";

export const Appcontext=createContext()

export const AppProvider=({children})=>{

  



    <Appcontext.Provider value={{}}>
        {children}
    </Appcontext.Provider>

}