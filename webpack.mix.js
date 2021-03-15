const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts(['resources/js/form.js', 'resources/js/custom.js', 'resources/js/slider.js'], 'public/assets/js/app.js')
    .sass('resources/scss/styles.scss', 'public/assets/css/app.css');
