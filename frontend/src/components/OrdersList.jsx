import { useState } from "react";
import GlobalContext from "../GlobalContext";
import Button from 'react-bootstrap/Button';
import { GoPackageDependents } from "react-icons/go";

const OrdersList = () => {
  const { orders, users } = GlobalContext();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const sendDelivery = () => {
    // todo: atualizar para enviado o status
    // enviar endereço para o aplicativo
    console.log("Enviado!")
  }

  return (
    <section className="list">
      {orders.map((order) => {
        const user = users.find((u) => u.id === order.userId);

      return (
        <div key={order.id} className="item-list">
          <div style={{width: "100%", justifyContent: "space-between"}} onClick={() => toggle(order.id)} className="item-list-header">
              Pedido #{order.id} — {order.status}
            
              <Button variant="primary" size="sm" onClick={(e) => {e.stopPropagation(); sendDelivery();}} >Send <GoPackageDependents /></Button>
          </div>

          {openId === order.id && (
            <div className="item-list-details">
              <p><b>Data:</b> {order.orderDate}</p>
              <p><b>Total:</b> R$ {order.totalAmount}</p>

              <div>
                <b>Items:</b>
                <table className="table hover mt-1">
                  <thead style={{color: "rgb(79,89,102)"}}>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      order.items.map((item) => (
                        <tr>
                          <td scope="row">{item.productName}</td>
                          <td>{item.productBrand}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div>
                <b>Client:</b>
                <ul key={order.userId}>
                  <li><strong>Name:</strong> {user.firstName} {user.lastName}</li>
                  <li><strong>Address:</strong> {user.address}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )
      })}
    </section>
  );
};

export default OrdersList;
