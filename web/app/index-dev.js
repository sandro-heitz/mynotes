import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MyNotesApp from './components/MyNotesApp';
import notesApp from './reducers'
import { polyfill } from 'es6-promise';

polyfill();

let store = createStore(notesApp)

const render = Component => {
    ReactDOM.render(<AppContainer><Provider store={store} >< Component xhref={window.location.href} /></Provider></AppContainer>, document.getElementById('app'));
}

render(MyNotesApp);

if (module.hot) {
    module.hot.accept('./components/MyNotesApp', () => render(MyNotesApp));
}

