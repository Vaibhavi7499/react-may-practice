import { createContext, useState } from "react";

export let userContext = createContext();

function UserContainer({children}){
let contextValue = {
    user : 'COCSIT'
}
return(
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>
)
}

export default UserContainer;