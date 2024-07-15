import React from "react"
import { Route , Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Registration/Register"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Search from "./pages/Search/Search";
import Layout from "./Components/Layout/Layout"
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Login />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
  )
}
