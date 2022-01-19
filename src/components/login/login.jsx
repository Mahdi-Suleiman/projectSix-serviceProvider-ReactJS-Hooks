import React, { useState } from 'react'
import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


const Login = (props) => {

  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!localStorage.getItem("users") || !loginInfo.email || !loginInfo.password) {
      Swal.fire({
        icon: "error",
        // title: "Oops...",
        text: "Wrong email or password!",
      });
      return
    };

    let allUsersFromLocalStorage = JSON.parse(localStorage.getItem("users"));

    let canLogin = false
    allUsersFromLocalStorage.forEach((user) => {
      if (loginInfo.email === user.email && loginInfo.password === user.password) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        navigate("/");
        canLogin = true
      }
    });
    if (!canLogin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong email or password!",
      });
    }
    props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
    setLoginInfo({
      email: "",
      password: ""
    })
  }
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className='login-form'>
        <h1 className="login-heading">Sign In</h1>
        <input onChange={handleChange} value={loginInfo.email} placeholder="Email" type="email" name="email" />
        <input onChange={handleChange} value={loginInfo.password} placeholder="Password" type="password" name="password" />
        <button className='login-button' type="submit">Login</button>
        <p className='dont-have-userount'>Don't Have an userount? <Link to="/register">Register Here</Link></p>
      </form>
    </div>
  )

}

export default Login
