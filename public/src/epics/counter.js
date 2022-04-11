import { switchMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { incrementSuc, decrementSuc } from '../actions/counter';

const counterAddEpic = (action$, state$) =>
{
    return (
        action$.pipe(
            ofType('COUNTER_ADD'),
            switchMap((action) =>
            {
                // return observable, promise, or array
                return Promise.resolve(action);
            }),
            map(() =>
            {
                return incrementSuc();
            })
        )
    );
};

const counterDesEpic = (action$) =>
{
    return (
        action$.pipe(
            ofType('COUNTER_DES'),
            switchMap((action) =>
            {
                // return observable, promise, or array
                return Promise.resolve(action);
            }),
            map(() =>
            {
                return decrementSuc();
            })
        )
    );
};

export default [
    counterAddEpic,
    counterDesEpic
];
