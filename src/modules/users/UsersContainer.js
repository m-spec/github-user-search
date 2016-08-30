import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersView from './UsersView'

import * as UserActions from './UsersState'

export default connect(
  state => ({
    usersList: state.getIn(['users', 'usersList']),
    fetchingUser: state.getIn(['users', 'fetchingUser'])
  }),
  dispatch => {
    const actions = bindActionCreators(UserActions, dispatch)
    return { actions }
  }
)(UsersView)
