import React, { PropTypes } from 'react'
import immutable from '@utils/immutable'
import Card from '@components/Card/Card'
import Toolbar from '@components/Toolbar/Toolbar'
import Button from '@components/Button/Button'
import PlainWrapper from '@components/Wrappers/PlainWrapper'
import ListWrapper from '@components/Wrappers/ListWrapper'
import Filter from '@components/Filter/Filter'

const UsersView = ({ usersList, actions, fetchingUser, userFilters }) => (
  <PlainWrapper>
    <Toolbar title="Random users">
      <Button isLoading={fetchingUser} onClick={actions.requestUser}>New user</Button>
      <Filter
        title="Gender"
        name="gender"
        onChange={actions.setUserFilters}
        options={[['all', 'all'], ['male', '♂'], ['female', '♀']]}
        selected={userFilters.gender ? userFilters.gender : 'all'}
      />
    </Toolbar>
    <ListWrapper emptyText="No users">
      { usersList.filter((user) => userFilters.gender === 'all' || userFilters.gender === user.gender)
        .map((user, index) => (
          <Card
            key={index}
            picture={user.picture.large}
            pictureAlt="user"
            title={`${user.firstName} ${user.lastName}`}
            subtitle={`${user.location.street} ${user.location.postcode}
              ${user.location.city.toUpperCase()}`}
          />
      ))}
    </ListWrapper>
  </PlainWrapper>
)

UsersView.propTypes = {
  usersList: PropTypes.instanceOf(immutable.List).isRequired,
  actions: PropTypes.object.isRequired,
  fetchingUser: PropTypes.bool.isRequired,
  userFilters: PropTypes.object
}

export default UsersView
