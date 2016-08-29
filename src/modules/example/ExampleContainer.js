import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExampleView from './ExampleView';

import * as ExampleActions from './ExampleState';

export default connect(
  state => ({
                                            value: state.getIn(['example', 'value']),
  }),
  dispatch => {
                                            const actions = bindActionCreators(ExampleActions, dispatch);
                                            return {
                                              addOne: () => actions.increment(),
                                              addFive: () => actions.increment(5),
                                              subtractOne: () => actions.decrement(),
                                              subtractFive: () => actions.decrement(5),
                                              multiplyByFive: () => actions.multiply(5),
                                              reset: () => actions.reset(),
                                              asyncRandom: () => actions.asyncRandom(),
    };
  }
)(ExampleView);
