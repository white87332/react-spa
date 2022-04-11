import { createRoot } from 'react-dom/client';
import { createRoutes } from './routes'
import './i18n/i18n';
import configureStore, { history } from './store/configureStore';

// store
const store = configureStore();

const root = createRoot(document.getElementById('root'));
root.render(createRoutes(store));
