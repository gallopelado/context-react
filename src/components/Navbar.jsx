import React, { useContext } from 'react'
import { OtroContext } from '../context/OtroProvider'
import { ThemeContext } from '../context/ThemeProvider'

export const Navbar = () => {

    const { theme, setTheme, cambioColor } = useContext(ThemeContext)
    const { info } = useContext(OtroContext)

    return (
        <div style={{ background: theme.background, color: theme.color }}>

            <h1>Navbar</h1>
            <label>Color</label>
            <input type="color" value={ theme.color } onChange={ e => cambioColor({...theme, color: e.target.value}) } />

            <label>Fondo</label>
            <input type="color" value={ theme.background } onChange={ e => setTheme({...theme, background: e.target.value}) } />

            <h5>{ info }</h5>
        </div>
    )
}
