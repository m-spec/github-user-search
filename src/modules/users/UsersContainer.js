import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersView from './UsersView'
import * as UserActions from './UsersState'

export default connect(
  state => ({
    usersList: state.getIn(['users', 'usersList']),
    fetchingUser: state.getIn(['users', 'fetchingUser']),
    filter: state.getIn(['users', 'filter']).toJS(),
    apiKey: state.getIn(['users', 'apiKey'])
  }),
  dispatch => {
    const {
      searchUsers,
      setFilter,
      setApiKey
    } = bindActionCreators(UserActions, dispatch)

    return { searchUsers, setFilter, setApiKey }
  },
  (state, dispatch, own) => {
    const merged = {
      searchUsers: () => dispatch.searchUsers(state.filter, state.apiKey),
      setApiKey: (apiKey) => dispatch.setApiKey(apiKey)
    }
    return Object.assign({}, state, dispatch, own, merged)
  }
)(UsersView)
