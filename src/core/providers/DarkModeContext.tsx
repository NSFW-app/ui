import React from 'react'

const defaultValue = true
export const DarkModeContext = React.createContext(defaultValue)

export interface DarkModeProviderProps {
  value?: boolean
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  value,
  children,
}) => {
  return (
    <DarkModeContext.Provider
      value={value !== undefined ? value : defaultValue}
    >
      {children}
    </DarkModeContext.Provider>
  )
}
