var context = require.context('./app', true, /^(?!.*(?:index)).*\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);

var context = require.context('./test', true, /\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
