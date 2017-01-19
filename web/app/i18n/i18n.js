import { I18n } from 'react-i18nify';
import { getParameterByName } from '../common/utils';
import de from './i18n_de';
import en from './i18n_en';

function initI18N(url) {
    let lang = (getParameterByName('lang', url) || navigator.language || 'de').slice(0, 2);
    let translations = { en , de };
    if (!!translations[lang] === false) {
        lang = 'de';
    }
    I18n.setTranslations(translations, false);
    I18n.setLocale(lang, false);
    return I18n;
};

export { initI18N };
