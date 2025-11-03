import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const AppContext = createContext()

const ordersUrl = "http://localhost:9191/api/v1/orders/all"
// const randomUserUrl = 'https://randomuser.me/api/'

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

const user = {
  "response": "Success!",
  "data": {
    "id": 6,
    "firstName": "The",
    "lastName": "Admin 1",
    "address": "Street 1, Av. 80",
    "email": "admin1@email.com",
    "orders": [
      {
        "id": 1,
        "userId": 6,
        "orderDate": "2025-10-30",
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
      }
    ],
    "cart": {
      "cartId": 1,
      "items": [],
      "totalAmount": 800.00
    }
  }
}

const AppProvider = ({ children }) => {
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])

    const fetchOrders = async (url) => {
            try {
                const {data} = await axios.get(url)
                // setOrders(order.data)
                // console.log(orders)
                setOrders(data.data)

                
                const userResponses = await Promise.all(
                  data.data.map((order) =>
                    axios.get(`http://localhost:9191/api/v1/users/user/${order.userId}`)
                  )
                )

                setUsers(userResponses.map((res) => res.data.data))
            } catch (error) {
                console.log(error.response)
            }
        }

    useEffect(()=> {
        fetchOrders(ordersUrl)
    }, [])

    const sendDelivery = async (orderId, user) => {
      // todo: enviar endereço para o aplicativo
      try{
        setOrders((prevOrders) => 
          prevOrders.map((order) =>
            order.id === orderId ? {...order, status: "SHIPPED"} : order
          ));

        await axios.patch(`http://localhost:9191/api/v1/orders/order/${orderId}`, {status: "SHIPPED"});

        alert(`Pedido #${orderId} enviado com sucesso!`);

        // exemplo:
        // await axios.post(`http://localhost:9090/api/v1/dear-livery/driver`, user.address);
        console.log(user.address);
      } catch(error){
        console.log(error)

        setOrders((prevOrders) => 
        prevOrders.map((order) =>
        order.id === orderId ? {...order, status: "PENDING"} : order
        ));
      }
  }

    return <AppContext.Provider value={{ orders, users, sendDelivery }}>
        { children }
    </AppContext.Provider>
}

export { AppContext, AppProvider }