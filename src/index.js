/* eslint-disable no-undef */
import React, {useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeContext, ThemeContextProvider} from './utils/themeContext'
import {EditContext, EditContextProvider} from './utils/editContext'
import {GlobalStyled} from './styles/defaultStyles'

const GlobalStyle = () =>{
  const {theme, set_Theme} = useContext(ThemeContext)
  const {editMode} = useContext(EditContext)


  useEffect(()=>{
    let currentTheme = localStorage.getItem('theme')
    if(currentTheme){
        set_Theme(currentTheme)
    }
    else{
      set_Theme('light')
    }
  }, [])

  return(
      <GlobalStyled theme={theme}  eMode={editMode}/>
  )
}


ReactDOM.render(

    <React.StrictMode>
      <ThemeContextProvider>
        <EditContextProvider>
          <GlobalStyle />
          <App />
        </EditContextProvider>
      </ThemeContextProvider>
    </React.StrictMode>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
