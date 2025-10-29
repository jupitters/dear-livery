import { createContext, useEffect } from 'react'
import axios from 'axios';

const AppContext = createContext()

// const ordersUrl = "http://localhost:9191/api/v1/orders/all"
const randomUserUrl = 'https://randomuser.me/api/'

const AppProvider = ({ children }) => {

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(randomUserUrl)
                console.log(response.data)
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