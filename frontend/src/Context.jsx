import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const AppContext = createContext()

// const ordersUrl = "http://localhost:9191/api/v1/orders/all"
const randomUserUrl = 'https://randomuser.me/api/'

const order = {
  "response": "Item Orders success!",
  "data": [
    {
      "id": 1,
      "userId": 6,
      "address": "Street 1, Av. 42",
      "orderDate": "2025-10-28",
      "totalAmount": 800.00,
      "status": "PENDING",
      "items": [
        {
          "productId": 1,
          "productName": "TV",
          "productBrand": "Apple",
          "quantity": 2,
          "price": 400.00
        }
      ]
    },
    {
      "id": 2,
      "userId": 6,
      "address": "Street 1, Av. 42",
      "orderDate": "2025-10-31",
      "totalAmount": 250.00,
      "status": "PENDING",
      "items": [
        {
          "productId": 1,
          "productName": "Watch",
          "productBrand": "Apple",
          "quantity": 1,
          "price": 250.00
        }
      ]
    }
  ]
}

const AppProvider = ({ children }) => {
    const [orders, setOrders] = useState([])

    const fetchOrders = async (url) => {
            try {
                const {data} = await axios.get(url)
                setOrders(order.data)
                // setOrders(data.results)
                console.log(orders)
            } catch (error) {
                console.log(error.response)
            }
        }

    useEffect(()=> {
        fetchOrders(randomUserUrl)
    }, [orders])

    return <AppContext.Provider value={{ orders }}>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }