import { BrowserRouter } from "react-router-dom"
import { Footer } from "./modules/Footer"
import { Main } from "./modules/Main"
import { Header } from "./modules/Header"


function App() {

  return (
    <BrowserRouter>
<Header />

<Main />

<Footer />
    </BrowserRouter>
  )
}

export default App
