var path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-hls-player.js',
        libraryTarget: 'umd',
        library: 'reactHlsPlayer'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
