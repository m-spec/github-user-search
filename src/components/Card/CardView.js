import React, { PropTypes } from 'react'
import './card.css'

const CardView = ({ user }) => (
  <div className="card-container">
    <div className="card-image-container">
      <img alt="user" src={user.picture.large} />
    </div>
    <p className="card-title">{`${user.firstName}, ${user.lastName}`}</p>
    <p className="card-subtitle">
      {user.location.street}<br />{user.location.postcode} {user.location.city}
    </p>
  </div>
)

CardView.propTypes = {
  user: PropTypes.object.isRequired
}

export default CardView
