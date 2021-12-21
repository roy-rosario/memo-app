import { useState, createContext } from "react"

const EditContext = createContext()

function EditContextProvider({children}){
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () =>{
        setEditMode(prev => !prev)
    }

 

    return(
        <EditContext.Provider value={{editMode, toggleEditMode}}>
            {children}
        </EditContext.Provider>
    )
}

export {EditContext, EditContextProvider}