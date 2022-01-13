import { useState, createContext } from "react"



const PictureContext = createContext()

function PictureContextProvider({children}){
    const [picture, setPicture] = useState(false)

 

    return(
        <PictureContext.Provider value={{picture, setPicture}}>
            {children}
        </PictureContext.Provider>
    )
}

export {PictureContext, PictureContextProvider}