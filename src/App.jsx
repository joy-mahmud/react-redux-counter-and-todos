import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Todos from './components/Todos'

function App() {
  return(
    <div>
      <Counter></Counter>
      <Todos></Todos>
    </div>
  )
}

export default App
