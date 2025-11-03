import { useState } from "react";
import GlobalContext from "../GlobalContext";
import Button from 'react-bootstrap/Button';
import { GoPackageDependents } from "react-icons/go";


const OrdersList = () => {
  const { orders, users, sendDelivery } = GlobalContext();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="list">
      {orders.map((order) => {
        const user = users.find((u) => u.id === order.userId);

      return (
        <div key={order.id} className="item-list">
          <div onClick={() => toggle(order.id)} className="item-list-header">
              Order #{order.id} — {order.status}
            
              <Button variant="primary" size="sm" onClick={(e) => {e.stopPropagation(); sendDelivery(order.id, user);}} disabled={order.status !== "PENDING"}>Send <GoPackageDependents /></Button>
          </div>

          {openId === order.id && (
            <div className="item-list-details">
              <p><b>Date:</b> {order.orderDate}</p>
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
                        <tr key={Math.random()}>
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
