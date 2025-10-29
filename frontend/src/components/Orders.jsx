import GlobalContext from "../GlobalContext";

const Orders = () => {
    const { orders } = GlobalContext()


  return <section>
      {
        orders.map((order) => {
          return <article key={order.id} className="single-order">
            <img src="#" alt="" style={{width: '200px'}} className="img"/>
            <footer>
              <h5>Pedido nº: {order.id}</h5>
            </footer>
            
          </article>
        })
      }
    </section>
  
}

export default Orders