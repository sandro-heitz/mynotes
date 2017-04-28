import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import notesApp from './reducers'
import MyNotesApp from './components/MyNotesApp';
let store = createStore(notesApp)

const MyNotesWrapper = (props) => {
    return <Provider store={store} ><MyNotesApp xhref={props.xhref} /></Provider>
}

MyNotesWrapper.PropTypes = {
    xhref: React.PropTypes.string.isRequired
}

export default MyNotesWrapper;