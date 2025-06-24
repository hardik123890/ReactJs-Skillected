import React from "react";
import userDataStorage from "./UserContext";

const UserContextProvider =({childern})=>{
    let userData = 'data of context'
    let copyright = "@ 2025 Hardik (from context)"
    return(
        <userDataStorage.Provider value={{userData, copyright}}>
            {childern}
        </userDataStorage.Provider>

    )

}
export default UserContextProvider