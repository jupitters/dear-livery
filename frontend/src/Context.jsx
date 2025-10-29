import { createContext, useEffect } from 'react'
import axios from 'axios';

const AppContext = createContext()

// const ordersUrl = "http://localhost:9191/api/v1/orders/all"
const randomUserUrl = 'https://randomuser.me/api/'

const AppProvider = ({ children }) => {

    const fetchOrders = async (url) => {
            try {
                const response = await axios.get(url)
                console.log(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(()=> {
        fetchOrders(randomUserUrl)
    }, [])

    return <AppContext.Provider value='Hello'>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }