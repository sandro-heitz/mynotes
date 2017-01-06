
import React, { Component } from 'react';

import { I18n } from 'react-i18nify';

class HeaderPanel extends Component {
    render() {
        return (<h1>{I18n.t('title')}</h1>);
    }
}

export default HeaderPanel;
