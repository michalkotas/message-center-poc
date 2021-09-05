const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        uniqueName: 'messagecenter',
        publicPath: 'auto'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'messagecenter',
            library: { type: 'var', name: 'messagecenter' },
            filename: 'remoteEntry.js',
            exposes: {
                './web-components': './src/web-component.js'
            }
        })
    ]
};
