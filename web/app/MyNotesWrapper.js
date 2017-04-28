import React from 'react';
import { Provider } from 'react-redux'

import MyNotesApp from './components/MyNotesApp';

import configureStore from './store';

let store = configureStore();

const MyNotesWrapper = (props) => {
    return <Provider store={store}><MyNotesApp xhref={props.xhref}/></Provider>
}

MyNotesWrapper.PropTypes = {
    xhref: React.PropTypes.string.isRequired,
    //store: React.PropTypes.object.isRequired
}

export default MyNotesWrapper;