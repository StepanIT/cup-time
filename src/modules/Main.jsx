import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { Promo } from "./Promo"
import { Order } from "./Order"
import { Cart } from "./cart"

export const Main = () => {
  return (
    <main className="main">

    <Routes>
      <Route
        path="/"
          element={
        <>
        <Promo />
        <Products />
        </>
      } />

      <Route
         path="/cart"
          element={
            <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <Cart />
              <Order />
            </>
      }> 

      </Route>
    </Routes>
  


   </main>
  )
}