import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import UserForm from './component/UserForm'
import RoutingEx from './component/router/RoutingEx'
import UseRefEx from './component/UseRefEx'
import CompC from './component/propdrillingEx/CompC'
import CompB from './component/propdrillingEx/CompB'
import CounterEx from './component/custonHookEx/CounterEx'

const App = () => {
  console.log("test")
  return (
    <>
<RoutingEx/>
<Routes>
  <Route path="userform" element={<UserForm/>} />
  <Route path="useref" element={<UseRefEx/>} />
  <Route path="compc" element={<CompC/>} />
  <Route path="compb" element={<CompB/>} />
  <Route path="counter" element={<CounterEx/>} />
</Routes>
</>
  )
}

export default App