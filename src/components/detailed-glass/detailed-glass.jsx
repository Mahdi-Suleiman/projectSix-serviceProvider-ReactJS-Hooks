import React, { useState } from 'react'
import "./detailed-glass.scss"
import { useParams, useNavigate } from "react-router-dom";

function DetailedGlass({ glasses, loggedUser, setLoggedUser }) {
  const { title } = useParams();
  const navigate = useNavigate();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) ? JSON.parse(localStorage.getItem("loggedUser")) : "")

  const addToCart = (item) => {
    if (!loggedUser) {
      navigate("/login")
    } else {
      const existingCartItem = loggedUser.cartItems.find(
        cartItem => cartItem.id === item.id
      )
      if (existingCartItem) {
        loggedUser.cartItems.map(cartItem => cartItem.id === item.id ? cartItem.quantity += 1 : cartItem)
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((user) => loggedUser.id !== user.id);
        filteredAllUsers.push(loggedUser);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
      } else {
        loggedUser.cartItems.push({ ...item, quantity: 1 })
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((user) => loggedUser.id !== user.id);
        filteredAllUsers.push(loggedUser);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
      }
    }
  }

  return (
    <div>
      {glasses
        .filter((glass) => glass.title === title)
        .map((glass) => (
          <div className='detailed-glass-container' key={glass.id}>
            <div className="glass-photo-container-detailed">
              <img className="glass-photo-detailed" src={glass.image} alt={glass.title} />
            </div>
            <div className='price-and-btn-detailed'>
              <h2 className="glass-title-detailed">{glass.title}</h2>
              <p className='glass-desc-detailed'>{glass.description}</p>
              <span className="glass-price-detailed">Price: ${glass.price}</span>
              <button className="buy-glass-btn" onClick={() => addToCart(glass)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DetailedGlass
