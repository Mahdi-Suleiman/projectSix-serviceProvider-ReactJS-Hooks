import React from 'react'
import "./glasses-in-shop.scss"
import glasses from '../../data/glasses/glasses'
import { Link } from "react-router-dom"

function GlassesShop() {
  return (
    <div>
      <div>
        <h2 className='generic-title'>Our Shop</h2>
        <hr />
      </div>
      <div className='glasses-container-home'>
        {glasses.map((glass) => (
          <div className="glass-wrapper" key={glass.id}>
            <h2 className="glass-title">
              {glass.title}
            </h2>
            <div className="glass-image-wrapper">
              <img className="glass-image" src={glass.image} alt={glass.title} />
            </div>

            <div className='glass-button'>
              <Link to={`/glasses/${glass.title}`}>
                View Glass
              </Link>
            </div>
          </div>))
        }

      </div>
    </div>)
}

export default GlassesShop