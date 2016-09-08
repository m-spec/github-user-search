import React, { PropTypes } from 'react'
import './Card.css'

const Card = ({ picture, title, subtitle, link }) => (
  <div className="card">
    <div className="card-container">
      <div className="card-image-container">
        <img alt="user" className="card-image" src={picture} />
      </div>
      <div className="card-content-container">
        <div className="card-title"><a className="card-title" href={link}>{title}</a></div>
        <div className="card-subtitle">{subtitle}</div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default Card
