import React from 'react'
import "./featured-glasses.scss"
import glasses from '../../data/glasses/glasses'
import { Link } from "react-router-dom"

function FeaturedGlasses() {
  return (
    <div id={'featured-glasses'}>
      <div>
        <h2 className='generic-title'>Best sellers</h2>
        <hr />
      </div>
      <div className='glasses-container-home'>
        {glasses.filter((glass, index) => index < 4).map((glass) => (
          <div className="glass-wrapper" key={glass.id}>
            <h2 className="glass-title">{glass.title}</h2>
            <div className="glass-image-wrapper">
              <img className="glass-image" src={glass.image} alt={glass.title} />
            </div>
            {/* <h4 className="glass-price">Price: ${glass.price}</h4> */}
            <div className='glass-button'>
              <Link to={`/glasses/${glass.title}`}>
                View Glass
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedGlasses
