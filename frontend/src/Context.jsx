import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const AppContext = createContext()

// const ordersUrl = "http://localhost:9191/api/v1/orders/all"
const randomUserUrl = 'https://randomuser.me/api/'

const AppProvider = ({ children }) => {
    const [orders, setOrders] = useState([])

    const fetchOrders = async (url) => {
            try {
                const {data} = await axios.get(url)
                setOrders(data.results)
                // console.log(data)
            } catch (error) {
                console.log(error.response)
            }
        }

    useEffect(()=> {
        fetchOrders(randomUserUrl)
    }, [])

    return <AppContext.Provider value={{ orders }}>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }