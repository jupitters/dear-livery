import React, { useContext } from 'react'

const AppContext = React.creteContext()

const AppProvider = ({ children }) => {
    return <AppContext.Provider value='Hello'>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }