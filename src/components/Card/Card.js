import React, { PropTypes } from 'react'
import './Card.css'

const Card = ({ picture, title, subtitle }) => (
  <div className="card">
    <div className="card-container">
      <div className="card-image-container">
        <div className="card-image" style={{ background: `url("${picture}")` }} />
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
