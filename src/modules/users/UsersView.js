import React, { PropTypes } from 'react'
import immutable from '@utils/immutable'
import CardView from '@components/Card/CardView'

const UsersView = ({ usersList, actions, fetchingUser }) => (
  <div>
    {usersList.map((user, index) => (
      <CardView key={index} user={user} />
    ))}
    {fetchingUser && (
      'loading...'
    )}
    <button onClick={actions.requestUser}>New user</button>
  </div>
  )

UsersView.propTypes = {
  usersList: PropTypes.instanceOf(immutable.List).isRequired,
  actions: PropTypes.object.isRequired,
  fetchingUser: PropTypes.bool.isRequired
}

export default UsersView
