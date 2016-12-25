
const path = require('path');
const webpack = require('webpack');

// __dirname steht für das Verzeichnis in dem das Skript aufgerufen wurde
// BUILD_DIR ist unser "output" Verzeichnis
// APP_DIR ist unser "source" Verzeichnis
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

// die eigentliche Konfiguration von Webpack
let config = {
    // der Entry-Point von dem aus webpack den Abhängigkeits-Graph aufbaut
    entry: APP_DIR + '/index.js',
    output: {
        // output-Verzeichnis und Bundle-Datei
        path: BUILD_DIR,
        filename:  'bundle.js'
    }
};

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
