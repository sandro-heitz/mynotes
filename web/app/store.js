
import { createStore } from 'redux'
import notesApp from './reducers'

var xXXx_store;

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
export default function configureStore() {
    console.log((xXXx_store ? "Using store ..." : "Creating store!"));
    xXXx_store = xXXx_store ? xXXx_store : createStore(notesApp);
    if (module && module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            xXXx_store.replaceReducer(nextRootReducer);
        });
    }
    return xXXx_store;
}

