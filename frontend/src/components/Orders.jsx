import GlobalContext from "../GlobalContext";

const Orders = () => {
    const { orders } = GlobalContext()

  return <section>
      {
        orders.map((order) => {
          return (<div>
            {order.name.first}
          </div>) 
        })
      }
    </section>
  
}

export default Orders