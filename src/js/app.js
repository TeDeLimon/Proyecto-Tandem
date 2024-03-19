//Variables del documento JS
const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

let criptomonedas;

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

    console.log(criptomonedas);

    //Incorporarlas al select de criptomonedas

    //Trabajar la lógica de la conversión
}

async function obtenerCriptomonedas() {

    let resultado = null;

    try {

        const respuesta = await fetch(url);
        resultado = await respuesta.json();

    } catch (error) {

        console.log(error);

    } finally {

        return resultado;
    }
}