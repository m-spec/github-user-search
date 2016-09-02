import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveState, restoreState } from '@utils/state'
import UsersView from './UsersView'
import * as UserActions from './UsersState'

export default connect(
  state => ({
    usersList: state.getIn(['users', 'usersList']),
    fetchingUser: state.getIn(['users', 'fetchingUser']),
    gender: state.getIn(['users', 'userFilters', 'gender']),

    saveState: () => saveState(state.toJS())
  }),
  dispatch => {
    const actions = bindActionCreators(UserActions, dispatch)
    const restore = () => dispatch(restoreState())
    return { actions, restoreState: restore }
  }
)(UsersView)
