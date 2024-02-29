# Instalación y uso de Gulp

## Instalación

Para instalar Gulp, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.
    - El enlace de descarga es: https://nodejs.org/en/download/current
    - Nos podemos asegurar si ejecutamos el siguiente comando en la terminal:
    
    ```bash
    node -v
    ```

2. Abre una terminal y navega hasta la carpeta raíz de tu proyecto.
3. Ejecuta el siguiente comando para instalar Gulp de forma global:

    ```bash
    npm install -g gulp
    ```
    - Nosotros deseamos tener las dependencias como dependencias de desarrollo. Esto quiere decir que no serán globales y compartidas por todos los proyectos.
    ```bash
    npm install --save-dev gulp
    ```
4. Una vez instalado Gulp, puedes verificar la versión con el siguiente comando:

    ```bash
    npx gulp --version
    ```

## Uso básico

1. Crea un archivo `gulpfile.js` en la raíz de tu proyecto.
2. Importa Gulp y los plugins necesarios en tu archivo `gulpfile.js`:

    ```javascript
    const gulp = require('gulp');
    const imagemin = require('gulp-imagemin');
    const sass = require('gulp-sass');
    ```

3. Define tareas para automatizar diferentes procesos. Por ejemplo, para comprimir imágenes, puedes usar el siguiente código:

    ```javascript
    gulp.task('compress-images', () => {
      return gulp.src('src/images/*')
         .pipe(imagemin())
         .pipe(gulp.dest('dist/images'));
    });
    ```

4. Para compilar archivos SASS, puedes utilizar el siguiente código:

    ```javascript
    gulp.task('compile-sass', () => {
      return gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('dist/css'));
    });
    ```

5. Ejecuta las tareas utilizando el comando `gulp` seguido del nombre de la tarea. Por ejemplo, para comprimir imágenes, ejecuta:

    ```bash
    gulp compress-images
    ```

    Y para compilar archivos SASS, ejecuta:

    ```bash
    gulp compile-sass
    ```

¡Y eso es todo! Ahora tienes una guía básica sobre cómo instalar Gulp, utilizarlo y automatizar tareas como la compresión de imágenes y el uso de SASS en tu proyecto.