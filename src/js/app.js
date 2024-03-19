//Variables del documento JS
const urlObtenerCriptomonedas = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

/**
 * Objeto con la información de la moneda y de la criptomoneda seleccionada
 */
const conversion = {
    moneda: null,
    criptomonedas: null
}

//Por defecto, las criptomonedas al principio son nulas
let criptomonedas = null;

//Selectores del documento
const formulario = document.querySelector("#formulario");
const selectMonedas = document.querySelector("select#moneda");
const selectCriptos = document.querySelector("select#criptomonedas");
const divResultado = document.querySelector("#resultado");

//Event listeners
document.addEventListener('DOMContentLoaded', iniciarAPP);
formulario.addEventListener('submit', realizarConversion);
selectMonedas.addEventListener('change', modificarConversion);
selectCriptos.addEventListener('change', modificarConversion);

/**
 * Función que controla el flujo principal de la aplicación
 */
async function iniciarAPP() {

    //Consultar las criptomonedas disponibles
    criptomonedas = await realizarPeticion(urlObtenerCriptomonedas);

    //Si no existen criptomonedas detenemos la ejecución del código
    if (!criptomonedas) return;

    //Procesamos las criptomonedas
    const cryptos = procesarCriptomonedas();

    //Incorporamos las criptomonedas al select de criptos
    agregarCriptomonedas(cryptos);
}

/**
 * Realiza una petición asíncrona al servidor y retorna el resultado
 * 
 * @returns {Any} El resultado obtenido
 */
async function realizarPeticion(url) {

    let resultado = null;

    try {

        //Esperamos la respuesta del servidor
        const respuesta = await fetch(url);

        //Convertimos el resultado a JSON
        resultado = await respuesta.json();

    } catch (error) {

        console.log("Algo ha salido mal => ", error);

    } finally {

        return resultado;
    }
}

/**
 * Desestructura el objecto de criptomonedas obtenido en el resultado
 * 
 * @returns {Array} Array con las criptomonedas
 */
function procesarCriptomonedas() {

    const { Data: cryptos } = criptomonedas;

    return cryptos;
}

/**
 * Añade dinámicamente las criptomonedas al select
 * 
 * @param {Array} cryptos Las criptomonedas
 */
function agregarCriptomonedas(cryptos) {

    //Iteramos sobre cada criptomoneda generando un option que posteriormente es agregado
    cryptos.forEach(crypto => {

        const { Name, FullName } = crypto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.innerText = FullName;

        selectCriptos.append(option);
    })
}

/**
 * Función principal que se encarga de realizar la conversión
 * 
 * @param {Event} e El evento que sucede en el DOM
 */
async function realizarConversion(e) {

    e.preventDefault();

    //Verificar que está seleccionado en ambos select alguna opción
    if (!Object.values(conversion).every(value => value != null)) {
        alert("Por favor, selecione las diferentes opciones")
        return;
    }

    //Guardamos el valor de las propiedades de el objeto conversión (moneda y la criptomoneda)
    const { moneda, criptomonedas } = conversion;

    //Generamos la URL dinámica en base a las propiedades de conversión
    const urlConversion = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${moneda}`;

    //Realizamos una petición asíncrona a la API (endpoint)
    const resultadoConversion = await realizarPeticion(urlConversion);

    const valorConversion = procesarConversion(resultadoConversion, criptomonedas, moneda);

    //Procesamos el resultado de la petición

    //Mostrar el resultado

}

/**
 * Función asociada al evento change, modifica el objecto conversión con el valor del option seleccionado
 * @param {Event} Event El evento que sucede sobre el select
 */
function modificarConversion(Event) {
    const { target } = Event;

    //Desectruturar el objeto sobre el que se ejecuta el evento
    const { selectedIndex, options, id } = target;

    //Obteniendo el option seleccionado
    const optionSeleccionado = options[selectedIndex];

    //El valor del option
    const value = optionSeleccionado.value;

    //Dinámicamente aprovechamos que el ID coincide con el nombre de la propiedad del object conversion y actualizamos su valor
    conversion[id] = value;
}

function procesarConversion(objetoConversion, criptomoneda, moneda) {

    console.log(objetoConversion);

}









function ejemplosArrayMethods(cryptos) {

    for (let i = 0; i < cryptos.length; i++) {
        //console.log(cryptos[i]);
    }

    cryptos.forEach(function (perrito) {
        //console.log(perrito);
    });

    //cryptos.forEach(crypto => console.log(crypto));

    const crytoimpares = cryptos.filter((crypto, index) => index % 2 == 0);

    console.log(crytoimpares);
}