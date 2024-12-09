import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SecondPage from "./parts/SecondPage"
import Footer from "./parts/Footer"
import Header from "./parts/Header"
import MainPage from "./parts/MainPage"
import "./style/Header.css"
import "./style/MainPage.css"
import "./style/SecondPage.css"
import "./style/Footer.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Header />
    < MainPage />
    < SecondPage />
    < Footer />
    </>
  )
}

export default App
