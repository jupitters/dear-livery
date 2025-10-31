import "./App.css"
import Orders from "./components/Orders"
import DeliveryBox from "./assets/delivery_box.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <img src={DeliveryBox} />
      <Orders />
    </main>
  )
}

export default App
