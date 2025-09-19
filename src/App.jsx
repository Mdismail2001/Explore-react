import { useState } from 'react'
import Form from './components/form/Form'
import ProductList from './components/product/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form></Form> */}
    <ProductList></ProductList>
    </>
  )
}

export default App
