import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState('light')

    const toggleTheme = () =>{
        const current = localStorage.getItem("theme")
        current === 'light'? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light")
        
        setTheme(prev => prev === 'light'? 'dark' : 'light')
        
        
    }

    const set_Theme = (theme) =>{
        setTheme(theme)
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme, set_Theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}