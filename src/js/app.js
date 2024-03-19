//Variables del documento JS
const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

const conversion = {
    moneda: null,
    criptomonedas: null
}

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

async function iniciarAPP() {

    //Consultar las criptomonedas disponibles
    criptomonedas = await obtenerCriptomonedas();

    if (!criptomonedas) return;

    //Procesar las criptomonedas
    const cryptos = procesarCriptomonedas();

    //Incorporarlas al select de criptomonedas
    agregarCriptomonedas(cryptos);
}

/**
 * Realiza una petición asíncrona al servidor y retorna las criptomonedas
 * 
 * @returns {Array|null} Las criptomonedas obtenidas
 */
async function obtenerCriptomonedas() {

    let resultado = null;

    try {

        const respuesta = await fetch(url);

        resultado = await respuesta.json();

    } catch (error) {

        console.log("Algo ha salido mal => ", error);

    } finally {

        return resultado;
    }
}

function procesarCriptomonedas() {

    const { Data: cryptos } = criptomonedas;

    return cryptos;
}

function agregarCriptomonedas(cryptos) {

    cryptos.forEach(crypto => {

        const { Name, FullName } = crypto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.innerText = FullName;

        selectCriptos.append(option);
    })
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

function realizarConversion(e) {

    e.preventDefault();

    //Verificar que está seleccionado en ambos select alguna opción
    if(!Object.values(conversion).every(value => value != null)) {
        console.log("detengo la ejecución")
        return;
    }

    

    //Necesitamos realizar una consulta para obtener el valor de la criptomoneda en la moneda seleccionada

    //Mostrar el resultado

}

//const urlConvert = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsysm${moneda}`;

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