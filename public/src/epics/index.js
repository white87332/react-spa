import { combineEpics } from 'redux-observable';
import counter from './counter';

const epics = combineEpics(
    ...counter,
);

export default epics;
