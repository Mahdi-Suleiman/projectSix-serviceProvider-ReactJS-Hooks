import React from 'react'
import "./games-in-shop.scss"
import glasses from '../../data/games/glasses'
import { Link } from "react-router-dom"

function GamesShop() {
  return (
    <div>
      <div>
        <h2 className='generic-title'>Our Shop</h2>
        <hr />
      </div>
      <div className='glasses-container-home'>
        {glasses.map((game) => (
          <div className="glass-wrapper" key={game.id}>
            <div className="glass-image-wrapper">
              <img className="glass-image" src={game.image} alt={game.title} />
            </div>
            <h2 className="glass-title">
              {game.title}
            </h2>
            <h4 className="glass-price">Price: $ {game.price}</h4>
            <div className='glass-button'>
              <Link to={`/games/$ {game.title}`}>
                {/* <button className="view-game-btn"> */}
                View Glass
                {/* </button> */}
              </Link>
            </div>
          </div>))
        }

      </div>
    </div>)
}

export default GamesShop