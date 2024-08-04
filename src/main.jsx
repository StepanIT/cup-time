import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "normalize.css"
import './index.css'
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvaider } from './context/CartContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvaider>
      <OrderProvider>
      <App />
      </OrderProvider>
      </CartProvaider>
    </ProductProvider>
  </React.StrictMode>,
)
