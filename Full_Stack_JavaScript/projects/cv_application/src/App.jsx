// import { useState } from 'react'
import UserOutput from "./components/UserOutput"
import UserInput from "./components/UserInput"
import "./App.css"


function App() {

  return (
    <div className="master-container">
      <UserInput />
      <UserOutput />
    </div>
  )
}

export default App
