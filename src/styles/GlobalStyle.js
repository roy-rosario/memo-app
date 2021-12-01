import { useContext } from "react";
import { ThemeContext } from "../utils/themeContext";
import { GlobalStyled } from "./defaultStyles";

export const GlobalStyle = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <GlobalStyled theme={theme} />
    )
}