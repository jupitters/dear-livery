import GlobalContext from "../GlobalContext";

const Orders = () => {
    const { orders } = GlobalContext()

  return <section>
      {
        orders.map((order) => {
          return (<div>
            {order.address}
          </div>) 
        })
      }
    </section>
  
}

export default Orders