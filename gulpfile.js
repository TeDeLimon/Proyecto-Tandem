//Get all funcionalities to be used in the gulp tasks
const { src, dest, watch, series, parallel } = require('gulp');
//Es un plugin que se encarga de compilar el código scss a css
const sass = require('gulp-sass')(require('sass'));
//Es una herramienta que se encarga de aportar versatilivdad al código css, eliminando espacios innecesarios, comentarios, etc.
const postcss = require('gulp-postcss');
//Es un plugin de postcss que se encarga de añadir los prefijos necesarios para que el código css sea compatible con todos los navegadores
const autoprefixer = require('autoprefixer');
//Es un plugin de postcss que se encarga de minificar el código css
const cssnano = require('cssnano');
//Source maps es una herramienta que nos permite mapear el código css para que sea más fácil de depurar
const sourcemaps = require('gulp-sourcemaps');
//Es un conjunto de herramientas que nos permite minificar el código js
const terser = require('gulp-terser-js');
//Es un plugin que se encarga de optimizar las imágenes
const imagemin = require('gulp-imagemin');
//Es un plugin que se encarga de convertir las imágenes a formato webp
const webp = require('gulp-webp');
//Es un plugin que se encarga de almacenar en caché las imágenes para procesarlas posteriormente
const cache = require('gulp-cache');
//Es un plugin que se encarga de notificar cuando se ejecuta una acción
const notify = require('gulp-notify');
//Es un plugin que se encarga de concatenar archivos
const concat = require('gulp-concat');
//Es un plugin que se encarga de reemplazar cadenas de texto
const replace = require('gulp-replace');
//Es un plugin que se encarga de renombrar archivos
const rename = require('gulp-rename');

/**
 * Define the paths for the gulp tasks (ruta de los archivos)
 */
const paths = {
    scss: 'src/scss/**/*.scss',
    css: 'src/css/**/*.css',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    videos: 'src/videos/**/*',
}

function scss() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/build/css'));
}

function legacyCss() {
    return src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/build/css'));
}

function javascript() {
    return src(paths.js, { base: '' })
        .pipe(sourcemaps.init())
        //.pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/build/js'));
}

function images() {
    return src(paths.images)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('public/build/img'))
        .pipe(notify({ message: 'Images task complete' }));
}

function webpImages() {
    return src(paths.images)
        .pipe(webp())
        .pipe(dest('public/build/img'))
        .pipe(notify({ message: 'Webp Images task complete' }));
}

function watchFiles() {
    watch(paths.scss, scss);
    watch(paths.css, legacyCss);
    watch(paths.js, javascript);
    watch(paths.images, images);
    watch(paths.images, webpImages);
    watch(paths.videos, videos);
}

function videos() {
    return src(paths.videos)
        .pipe(dest('public/build/videos'));
}

exports.watchFiles = watchFiles;

exports.default = parallel(scss, legacyCss, javascript, images, webpImages, videos, watchFiles);