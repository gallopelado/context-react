import React, { createContext, useState } from 'react'

export const OtroContext = createContext()

export const OtroProvider = (props) => {

  const [info, setInfo] = useState('Desde otro context')

  return (
    <OtroContext.Provider value={{ info, setInfo }}>
      { props.children }
    </OtroContext.Provider>
  )
}
