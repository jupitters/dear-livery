import { useContext } from "react"
import { AppContext } from "../Context"

const Orders = () => {
    const context = useContext(AppContext)
    console.log(context)
  return (
    <div>Orders</div>
  )
}

export default Orders