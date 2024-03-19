//Variables del documento JS
const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

//Selectores del documento
const formulario = document.querySelector("#formulario");
const selectMonedas = document.querySelector("select#moneda");
const selectCriptos = document.querySelector("select#criptomonedas");
const divResultado = document.querySelector("#resultado");

//Event listeners
document.addEventListener('DOMContentLoaded', iniciarAPP);


async function iniciarAPP() {

    //Consultar las criptomonedas disponibles
    await obtenerCriptomonedas();

    //Incorporarlas al select de criptomonedas

    //Trabajar la lógica de la conversión
}

async function obtenerCriptomonedas() {
    
}