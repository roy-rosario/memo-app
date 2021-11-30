import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState('light')

    const toggleLightTheme = () =>{
        setTheme('light')
    }

    const toggleDarkTheme = () =>{
        setTheme('dark')
    }

    const set_Theme = (theme) =>{
        setTheme(theme)
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleLightTheme, toggleDarkTheme, set_Theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}