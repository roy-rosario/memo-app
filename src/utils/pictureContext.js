import { useState, createContext } from "react"
import darkData from '../../../utils/darkImages.json'



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