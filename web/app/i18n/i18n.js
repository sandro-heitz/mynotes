import { I18n } from 'react-i18nify';

import de from './i18n_de.js';
import en from './i18n_en.js';

let getParameterByName = function(name, url = window.location.href) {
    //if (!url) {
    //  url = window.location.href;
    //}
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const lang = (getParameterByName('lang') || navigator.language || 'de').slice(0, 2);

const translations = { en, de };

function initI18N() {
    I18n.setTranslations(translations, false);
    I18n.setLocale(lang, false);
    return I18n;
};

export { initI18N };
