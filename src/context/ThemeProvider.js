import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {

    const themes = {
        color: '#FF5733'
        , background: '#DEF7D1'
    }

    const [theme, setTheme] = useState(themes)
    
    const cambioColor = valor => {
        setTheme(valor)
        localStorage.setItem('theme_local', JSON.stringify(valor))
    }

    useEffect(() => {
        if(localStorage.getItem('theme_local')) {
            const theme_local = JSON.parse(localStorage.getItem('theme_local'))
            setTheme(theme_local)
        }
    }, [])

    return (
        <ThemeContext.Provider value={ {theme, setTheme, cambioColor} }>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider