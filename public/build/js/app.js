const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"




const formulario = document.querySelector("#formulario");
const selectmonedas = document.querySelector("selectmonedas");
const selectcryptos = document.querySelector("select#criptomonedas");
const divresultado = document.querySelector("#resultado");


document.addEventListener(`DOMContentloaded`, iniciarAPP);


async function iniciarAPP(){

    await obtenerCriptomonedas();
}
async function obtenerCriptomonedas(){
    console.log("obteniendo crypto monedas...")
}

async function obtenerCriptomonedas(){

    let resultado = null;

    try {
        const respuesta = await fetch(url);
        const respuesta = await respuesta.json();
    } catch (error){

    } finally {
        return resultado;
    }
}
//# sourceMappingURL=app.js.map
