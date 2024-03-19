//Variables del documento JS
const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

let criptomonedas = null;

//Selectores del documento
const formulario = document.querySelector("#formulario");
const selectMonedas = document.querySelector("select#moneda");
const selectCriptos = document.querySelector("select#criptomonedas");
const divResultado = document.querySelector("#resultado");

//Event listeners
document.addEventListener('DOMContentLoaded', iniciarAPP);

async function iniciarAPP() {

    //Consultar las criptomonedas disponibles
    criptomonedas = await obtenerCriptomonedas();

    if (!criptomonedas) return;

    //Procesar las criptomonedas
    const cryptos = procesarCriptomonedas();

    //ejemplosArrayMethods(cryptos);

    //Incorporarlas al select de criptomonedas
    agregarCriptomonedas(cryptos);

    //Trabajar la lógica de la conversión
}

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
    console.log(cryptos);

    for (let i = 0; i < cryptos.length; i++) {

        const { Name, FullName } = cryptos[i].CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.innerText = FullName;

        selectCriptos.append(option);
    }
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