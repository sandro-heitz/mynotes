var context; 

//context = require.context('./app', true, /^(?!.*(?:index)).*\.js$/); //make sure you have your directory and regex test set correctly!
//context.keys().forEach(context);

//import { initI18N } from './app/i18n/i18n';
import MyNotesApp from './app/components/MyNotesApp';

context = require.context('./test', true, /\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
