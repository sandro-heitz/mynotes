import { I18n } from 'react-i18nify';
import { getParameterByName } from '../common/utils.js';
import de from './i18n_de.js';
import en from './i18n_en.js';

function initI18N(url) {
    let lang = (getParameterByName('lang', url) || navigator.language || 'de').slice(0, 2);
    let translations = { en , de };
    I18n.setTranslations(translations, false);
    I18n.setLocale(lang, false);
    return I18n;
};

export { initI18N };
