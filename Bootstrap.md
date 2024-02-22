# Bootstrap

Bienvenidos a la introducción a Bootstrap.

Hoy vais a conocer y aprender a utilizar la biblioteca de Bootstrap.

https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Contenidos
- [¿Qué es Bootstrap?](#¿qué-es-bootstrap?)
- [¿Cómo utilizar Bootstar en tu página?](#¿cómo-utilizar-bootstar-en-tu-página)
- [Iconos de Bootstrap](#iconos-de-bootstrap)
- [Responsive](#responsive)
- [Enlaces útiles](#enlaces-útiles)


## ¿Qué es Bootstrap?
Bootstrap es un framework de desarrollo web de código abierto que facilita la creación de sitios web y aplicaciones móviles. Fue desarrollado por Twitter y es uno de los frameworks más populares para el desarrollo front-end. 

El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.

Bootstrap proporciona una colección de estilos y componentes predefinidos, así como un sistema de rejilla flexible que simplifica la maquetación y el diseño de páginas web de manera rápida y eficiente.

Otra de las principales virtudes de Bootstrap es la capacidad de construir sitios web responsive para dispositivos móviles de forma sencilla.

## ¿Cómo utilizar Bootstar en tu página?
Para poder utilizar Bootstrap en nuestro sitio web, podemos hacerlo de dos maneras:
1. Descargando el código fuente de CSS y JS y añadiéndolo a nuestro proyecto (https://getbootstrap.com/docs/5.3/getting-started/download/).
2. Importando directamente sobre nuestro documento los enlaces del CSS (en el `<head>` mediante la etiqueta `<link>`) y del JS (al final del `<body>` mediante la etiqueta `<script>`).
    - CSS: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`
    - JS: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>`

Una vez añadidos a nuestro sitio web, ya podremos empezar a utilizar Bootstrap.

## Iconos de Bootstrap
Además, Bootstrap cuenta con una gran cantidad de iconos que podremos utilizar como queramos y donde queramos de nuestro sitio web.

Estos iconos tendrán un comportamiento similar al de los textos, es decir, les podremos dar color, tamaño y estilo como si de textos se tratasen.

Al igual que con el CSS y JS, deberemos importar los iconos de Bootstrap en nuestro documento para poder utilizarlos. Podremos descargar el paquete de archivos o también podremos importarlo directamente (añadiéndolo en el `<head>` mediante la etiqueta `<link>`), que es lo más rápido y sencillo.
- Iconos Bootstrap: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`

Podremos "llamar" a estos iconos de distintas formas, pero la más fácil es añadiendo al lugar donde queremos usarlos la siguiente etiqueta:
- `<i class="bi bi-1-circle"></i>`

Que, depediendo del icono que queramos, utilizaremos una clase u otra. En el siguiente enlace podréis acceder a la lista completa de iconos para buscarlos y usarlos:
- https://icons.getbootstrap.com/

## Responsive
https://getbootstrap.com/docs/5.3/layout/grid/

Los bloques en Bootstrap se dividen en 12 columnas por fila. Esto es importante recordarlo, porque a la hora de organizar un bloque determinado y posicionar los componentes en un lugar u otro o que ocupen un espacio u otro, habrá que especificar cuántas columnas ocupará cada elemento. Además, gracias a las clases que veremos unas líneas abajo, podremos determinar no solo cuántas columnas ocupa un elemento, sino que también podremos indicar en qué dimensiones ocupará según qué columnas. Por ejemplo, queremos que en un dispositivo móvil un elemento ocupe las 12 columas de ancho, es decir, todo el ancho del bloque, pero luego en un monitor ocupe tan solo 6, para dejar hueco a otro elemento y que ocupe las 6 columnas restantes. Esto se entenderá mejor con la práctica. 

Bootstrap ofrece multitud de clases y ayudas para mejorar el diseño responsive de una web.

Entre otras funcionalidades, cabe destacar dos conceptos a tener en cuenta.
1. Breakpoints: son puntos de interrupción que se utilizan para crear un diseño adaptable al tamaño del dispositivo en el que estén visualizando la pantalla. Es decir, aplicaremos las siguientes clases según el ancho de nuestra ventana:
    - Para ventanas inferiores a 576px no hay clase, es el base.
    - A partir de 576px se utiliza la clase sm. Ex: col-sm-
    - A partir de 768px se utiliza la clase md. Ex: col-md-
    - A partir de 992px se utiliza la clase lg. Ex: col-lg-
    - A partir de 1200px se utiliza la clase xl. Ex: col-xl-
    - A partir de 1400px se utiliza la clase xxl. Ex: col-xxl-
2. Los container: básicamente hay 3 y se lo aplicaremos como clase a un `<div>`:
   - .container, que establece un max-width en cada punto de interrupción de respuesta
   - .container-{breakpoint}, que es width: 100% hasta el punto de interrupción especificado
   - .container-fluid, que es width: 100% en todos los puntos de interrupción

## Enlaces útiles
Esto son enlaces dentro de la web de Bootstrap que os vendrán bien como atajos:
- Tablas: https://getbootstrap.com/docs/5.3/content/tables/
- Formularios: https://getbootstrap.com/docs/5.3/forms/form-control/
- Botones: https://getbootstrap.com/docs/5.3/components/buttons/
- Navbar: https://getbootstrap.com/docs/5.3/components/navbar/
- Flex: https://getbootstrap.com/docs/5.3/utilities/flex/
- Spacing (margin y padding): https://getbootstrap.com/docs/5.3/utilities/spacing/
- Text: https://getbootstrap.com/docs/5.3/utilities/text/