import { useState } from "react";

const OrdersList = ({ orders }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="list">
      {orders.map((order) => (
        <div key={order.id} className="item-list">
          <div onClick={() => toggle(order.id)} className="item-list-header">
            Pedido #{order.id} — {order.status}
          </div>

          {openId === order.id && (
            <div className="item-list-details">
              <p><b>Endereço:</b> {order.address}</p>
              <p><b>Data:</b> {order.orderDate}</p>
              <p><b>Total:</b> R$ {order.totalAmount}</p>

              <div>
                
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default OrdersList;
