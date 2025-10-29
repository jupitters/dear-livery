import GlobalContext from "../GlobalContext";

const Orders = () => {
    const { orders } = GlobalContext()


  return <section className="section-center">
      {
        orders.map((order) => {
          return <article key={order.id} className="single-order">
            <img src="#" alt="" className="img"/>
            <footer>
              <h5>Pedido nº: {order.id}</h5>
            </footer>
          </article>
        })
      }
    </section>
  
}

export default Orders