import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h3 className="cardH">
            {props.title ? props.title : "Heading Here"}
        </h3>
        <p className="cardD">
            {props.description}
        </p>
      </div>
    </div>
  )
}

export default Card
