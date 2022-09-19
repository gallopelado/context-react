import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export const Parrafo = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <p style={ { color: theme.color } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem necessitatibus dolorem dolor, consectetur libero voluptas veritatis eveniet corrupti vel voluptates sed. Corporis quibusdam culpa ratione itaque architecto minima sapiente.</p>
    )
}
