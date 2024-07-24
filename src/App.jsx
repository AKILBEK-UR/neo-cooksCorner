import React from "react"
import { Route , Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Registration/Register"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Search from "./pages/Search/Search";
import Layout from "./Components/Layout/Layout"
import Detail from "./pages/Detail/Detail"
import { selectAuthState } from "./store/Auth/authReducer"
import { useSelector } from "react-redux"
export default function App() {
  const authState = useSelector(selectAuthState);
  console.log(selectAuthState);
  return (
    <>
    {authState.isAuth ? (      
        <Routes>
      <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route paht="/detail/:mealId" element = {<Detail />} />
        </Route>
      </Routes>
    ) : (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    )}
      </>
  )
}
