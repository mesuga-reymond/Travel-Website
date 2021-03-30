/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { Link } from 'react-router-dom'

function CardItems() {
    return (
        <>
          <li className="cards__item">
              <Link className="cards__item__link">
                  <figure className="cards__item__pic-wrap">
                      <img src="/" alt="Travel img" className="cards__item__img"/>
                  </figure>
                  <div className="cards__item__info">
                      <h5 className="cards__item__text"/>
                  </div>
              </Link>
          </li>   
        </>
    )
}

export default CardItems
