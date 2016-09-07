import React, { PropTypes } from 'react'
import immutable from '@utils/immutable'

import Card from '@components/Card/Card'
import Toolbar from '@components/Toolbar/Toolbar'
import PlainWrapper from '@components/Wrappers/PlainWrapper'
import Results from '@components/Results/Results'
import SearchBar from '@components/SearchBar/SearchBar'

const UsersView = ({ usersList, actions }) => (
  <PlainWrapper>
    <Toolbar title="GitHub user search" />
    <SearchBar
      placeholder="Search"
      searchFunc={actions.searchUsers}
    />
    <Results>
      { usersList.map((user, index) => (
        <Card
          key={index}
          picture={user.avatar_url}
          title={user.login}
          subtitle={`Score: ${user.score}`}
          link={user.html_url}
        />
      ))}
    </Results>
  </PlainWrapper>
)

UsersView.propTypes = {
  usersList: PropTypes.instanceOf(immutable.List).isRequired,
  actions: PropTypes.object.isRequired,
  fetchingUser: PropTypes.bool.isRequired,
  gender: PropTypes.string,
  saveState: PropTypes.func,
  restoreState: PropTypes.func
}

export default UsersView
