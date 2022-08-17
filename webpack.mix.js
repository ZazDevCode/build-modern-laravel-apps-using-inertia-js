// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'dist').setPublicPath('dist')
    .vue(3)
    .postCss('resources/css/app.css', 'public/css', [

    ])
    .version();