import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import { createEpicMiddleware } from 'redux-observable';
import createRootReducer from '../reducers';
import rootEpic from '../epics';

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState)
{
    const store = createStore(
        createRootReducer(history), // root reducer with router state,
        initialState,
        compose(
            // applyMiddleware(routerMiddleware),
            applyMiddleware(routerMiddleware, epicMiddleware),
            window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
        )
    );

    epicMiddleware.run(rootEpic);

    if (process.env.NODE_ENV !== 'production' && module.hot)
    {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
}
