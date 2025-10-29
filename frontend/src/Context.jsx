import { createContext, useEffect } from 'react'

const AppContext = createContext()

// const ordersUrl = "http://localhost:9191/api/v1/orders/all"
const randomUserUrl = 'https://randomuser.me/api/'

const AppProvider = ({ children }) => {

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch(randomUserUrl)
                const data = await response.json()
                console.log(data.results)
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