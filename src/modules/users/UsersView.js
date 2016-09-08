import React, { PropTypes } from 'react'
import immutable from '@utils/immutable'

import Card from '@components/Card/Card'
import Toolbar from '@components/Toolbar/Toolbar'
import PlainWrapper from '@components/Wrappers/PlainWrapper'
import Results from '@components/Results/Results'
import SearchBar from '@components/SearchBar/SearchBar'
import ApiBar from '@components/ApiBar/ApiBar'

const UsersView = ({ usersList, searchUsers, setFilter, filter, apiKey, setApiKey }) => (
  <PlainWrapper>
    <Toolbar
      title="GitHub user search"
      personalApiKey={apiKey}
    />
    <SearchBar
      placeholder="Search"
      filter={filter}
      searchFunc={searchUsers}
      setFilter={setFilter}
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
    {apiKey ? null : <ApiBar changeApiKey={setApiKey} />}
  </PlainWrapper>
)

UsersView.propTypes = {
  usersList: PropTypes.instanceOf(immutable.List).isRequired,
  searchUsers: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  fetchingUser: PropTypes.bool.isRequired,
  filter: PropTypes.object,
  saveState: PropTypes.func,
  restoreState: PropTypes.func,
  apiKey: PropTypes.string,
  setApiKey: PropTypes.func.isRequired
}

export default UsersView
