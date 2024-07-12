import React from "react"
import { Route , Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Registration/Register"

export default function App() {
  return (
      <Routes>
        <Route path="/" element = { <Login /> } /> 
        <Route path="/register" element = {<Register />} />
      </Routes>
  )
}
