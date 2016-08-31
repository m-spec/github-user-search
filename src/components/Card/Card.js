import React, { PropTypes } from 'react'
import './Card.css'

const Card = ({ picture, pictureAlt, title, subtitle }) => (
  <div className="card">
    <div className="card-container">
      <div className="card-image-container">
        <img alt={pictureAlt} src={picture} />
      </div>
      <div className="card-content-container">
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{subtitle}</div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  pictureAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Card
