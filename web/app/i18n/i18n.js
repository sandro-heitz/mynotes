import { I18n } from 'react-i18nify';
import { getParameterByName } from '../common/utils';
import de from './i18n_de';
import en from './i18n_en';

function initI18N(url) {
    console.log('initI18N: ' + url);
    const myHandleMissingTranslation = (key, replacements) => `Missing translation: ${key}`;
    I18n.setHandleMissingTranslation(myHandleMissingTranslation);
    if (I18n.t('title') !== 'Missing translation: title') {
        return I18n;
    }

    let lang = (getParameterByName('lang', url) || navigator.language || 'de').slice(0, 2);
    let translations = { en , de };
    if (!!translations[lang] === false) {
        lang = 'de';
    }
    I18n.setTranslations(translations, false);
    I18n.setLocale(lang, false);
    console.log(I18n);
    return I18n;
};

export { initI18N };
