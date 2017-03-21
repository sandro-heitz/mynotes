
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename:  'bundle.js'
    },
    module: {
        // AENDERUNG
        // loaders, die unseren Source-Code transformieren
        // in diesem fall wird babel benutzt um notwendige ES6 transformation vorzunehmen
        rules: [
            {
                test: /\.js?/,
                include: APP_DIR,
                use: 'babel-loader'
            }
        ]
    }
};

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
