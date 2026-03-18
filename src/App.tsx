
import './App.css'
import OrderForm from './components/OrderForm/OrderForm';

function App() {

 const hadleOrder = (data: string) => {
console.log("Order received from:", data);

 }

  return (
    <>
      <h1>Order Form</h1>
      <OrderForm onSubmit={hadleOrder} />

    </>
  )
}

export default App
