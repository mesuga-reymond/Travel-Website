import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
