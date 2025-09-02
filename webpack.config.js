const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: path.resolve(__dirname, 'src', 'index.js'), // Entry point of your application
        output: {
            path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
            filename: 'bundle.js', // Name of the bundled JavaScript file
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/, // Apply loader to .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                loader: 'babel-loader', // Use babel-loader
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'dist', 'index.html'), // Path to your HTML template
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve static files from 'dist'
        port: 3000, // Port for the development server
        open: true, // Open browser automatically
    },
};