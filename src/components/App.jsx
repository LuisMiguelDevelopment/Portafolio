import { useEffect } from "react"
import { BrowserRouter ,Routes ,Route  } from "react-router-dom"
import home from "./pages/home"
import Header from "./molecules/header/header"
import './app.css'

const App = () => {

 

  return (
    
    <>
    <Header/>
      <BrowserRouter>
          <Routes>
              <Route path='/' Component={home}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App