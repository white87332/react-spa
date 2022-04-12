import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';

import counter from './counter';

export default history => combineReducers({
    router: createRouterReducer(history),
    counter,
});
