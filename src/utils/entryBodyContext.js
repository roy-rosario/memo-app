import { useState, createContext } from "react"

const EntryBodyContext = createContext()

function EntryBodyContextProvider({children}){
    const [entryBody, setEntryBody] = useState("")


    return(
        <EntryBodyContext.Provider value={{entryBody, setEntryBody}}>
            {children}
        </EntryBodyContext.Provider>
    )
}

export {EntryBodyContext, EntryBodyContextProvider}