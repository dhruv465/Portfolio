import { useState } from 'react'
import './App.css'
import { Header } from './MyComponents/Navigation/Header'
import Portfolio from './MyComponents/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
             {/* <Header/> */}
             <Portfolio />
    </>
  )
}

export default App
