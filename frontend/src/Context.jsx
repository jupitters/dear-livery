import { createContext, useEffect } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9191/api/v1/orders/all')
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return <AppContext.Provider value='Hello'>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }