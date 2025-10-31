import GlobalContext from "../GlobalContext";
import OrdersList from "./OrdersList";

const Orders = () => {
  const { orders } = GlobalContext();

  if (!orders.length) return <p style={{display: "flex", justifyContent: "center"}}>Carregando pedidos...</p>;

  return <OrdersList />;
};

export default Orders;
