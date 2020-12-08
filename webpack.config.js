const process = require('process');

const config = require('./webpack-shared-config');

module.exports = [
    Object.assign({}, config, {
        entry: {
            'lib-jitsi-meet': './index.js'
        },
        devtool: 'hidden-source-map',
        mode: 'production',
        output: Object.assign({}, config.output, {
            library: 'JitsiMeetJS',
            libraryTarget: 'umd'
        })
    }),
    {
        entry: {
            worker: './modules/e2ee/Worker.js'
        },
        mode: 'production',
        output: {
            filename: 'lib-jitsi-meet.e2ee-worker.js',
            path: process.cwd()
        },
        optimization: {
            minimize: false
        }
    }
];
