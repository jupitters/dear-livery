import { createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    return <AppContext.Provider value='Hello'>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }