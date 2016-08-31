import React, { PropTypes } from 'react'
import immutable from '@utils/immutable'
import Card from '@components/Card/Card'
import Toolbar from '@components/Toolbar/Toolbar'
import Button from '@components/Button/Button'
import PlainWrapper from '@components/Wrappers/PlainWrapper'
import ListWrapper from '@components/Wrappers/ListWrapper'

const UsersView = ({ usersList, actions, fetchingUser }) => (
  <PlainWrapper>
    <Toolbar title="Random users">
      <Button onClick={actions.requestUser}>New user</Button>
    </Toolbar>
    <ListWrapper emptyText="No users" isLoading={fetchingUser}>
      {usersList.size > 0 ? usersList.map((user, index) => (
        <Card
          key={index}
          picture={user.picture.large}
          pictureAlt="user"
          title={`${user.firstName} ${user.lastName}`}
          subtitle={`${user.location.street} ${user.location.postcode}
            ${user.location.city.toUpperCase()}`}
        />
    )) : null }
    </ListWrapper>
  </PlainWrapper>
  )

UsersView.propTypes = {
  usersList: PropTypes.instanceOf(immutable.List).isRequired,
  actions: PropTypes.object.isRequired,
  fetchingUser: PropTypes.bool.isRequired
}

export default UsersView
