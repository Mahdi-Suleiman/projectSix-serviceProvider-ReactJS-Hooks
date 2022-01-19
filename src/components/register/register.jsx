import React, { useState } from 'react'
import "./register.scss"
import Swal from 'sweetalert2'
import { useNavigate, Link } from "react-router-dom"

const Register = (props) => {
    const navigate = useNavigate()
    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [])

    const [userInformation, setuserInformation] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        appointments: [],
        cartItems: [],
        id: registeredUsers.length + 1,
    })

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleChange = (e) => {
        setuserInformation({ ...userInformation, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        const { firstname, lastname, email, password, confirmPassword } = userInformation;
        e.preventDefault();
        setIsFormSubmitted(true)
        if (!firstname || !lastname || !email || !password || !confirmPassword)
            return;
        let canRegister = false;
        if (firstname.length > 4 && lastname.length > 4 && email && password.length > 4 && password === confirmPassword) {
            canRegister = true;
            console.log("true");

            registeredUsers.forEach(item => {
                if (item.email === userInformation.email) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email already exists!",
                    });
                    return;
                }
            })

            if (canRegister) {

                registeredUsers.push(userInformation)
                localStorage.setItem("users", JSON.stringify(registeredUsers))
                localStorage.setItem("loggedUser", JSON.stringify(userInformation))
                setRegisteredUsers(JSON.parse(localStorage.getItem("users")))
                props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
                setuserInformation({
                    ...userInformation,
                    lastname: "",
                    firstname: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
                navigate("/")
            }
        }
    }
    return (
        <div className="register-form-container">
            <form onSubmit={handleSubmit} className='register-form'>
                <h1 className="signup-heading">Register</h1>
                <input
                    onChange={handleChange}
                    id='firstname'
                    value={userInformation.firstname}
                    placeholder="First Name"
                    type="text" />
                {isFormSubmitted && (userInformation.firstname.length <= 2 || !userInformation.firstname) ?
                    <small className="error-message">Please enter a first name with length of 2 characters or more</small> :
                    null}

                <input
                    onChange={handleChange}
                    id='lastname'
                    value={userInformation.lastname}
                    placeholder="Last Name"
                    type="text"
                />
                {(isFormSubmitted && (userInformation.lastname.length <= 2 || !userInformation.lastname))
                    ? <small className="error-message">Please enter a last name with length of 2 characters or more</small>
                    : null}

                <input
                    onChange={handleChange}
                    id='email'
                    value={userInformation.email}
                    placeholder="Email"
                    type="email"
                />
                {(isFormSubmitted && !userInformation.email) ?
                    <small className="error-message">Please enter an email</small> :
                    null}

                <input
                    onChange={handleChange}
                    id='password'
                    value={userInformation.password}
                    placeholder="Password"
                    type="password"
                />
                {(isFormSubmitted && (userInformation.password.length <= 4 || !userInformation.password)) ?
                    <small className="error-message">Password can't be less than 6 characters</small> :
                    null}

                <input onChange={handleChange}
                    id='confirmPassword'
                    value={userInformation.confirmPassword}
                    placeholder="Confirm Password"
                    type="password"
                />
                {(isFormSubmitted && (!userInformation.confirmPassword || userInformation.password !== userInformation.confirmPassword)) ?
                    <small className="error-message">Please make sure passwords match</small> :
                    null}

                <button type="submit" className='register-button'>Register</button>
                <p className='already-have'>Already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Register
