import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import MyNotesWrapper from './MyNotesWrapper';
import { polyfill } from 'es6-promise';

polyfill();

const render = Component => {
    ReactDOM.render(<AppContainer>< Component xhref={window.location.href} /></AppContainer>, document.getElementById('app'));
}

render(MyNotesWrapper);

if (module.hot) {
    module.hot.accept('./MyNotesWrapper', () => render(MyNotesWrapper));
}

