import React from "react";
import { useState } from 'react';
import UseState from "./components/UseState";
import UseContext from './components/UseContext';
import Task from "./components/Task";
import './App.css'

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)
  
  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
      <div>
        {/* <UseState/> */}
        <ToggleTheme.Provider value={state}>
          <button onClick={handleToggle}>Toggle</button>
          {/* <UseContext/> */}
          <Task/>
        </ToggleTheme.Provider>
      </div>
    </>
  )
}

export default App
