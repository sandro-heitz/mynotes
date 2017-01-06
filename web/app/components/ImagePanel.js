
import React, { Component } from 'react';

import image from '../images/files/mynotes.png';

class ImagePanel extends Component {
    render() {
        return (<h1><img src={image}></img></h1>);
    }
}

export default ImagePanel;

