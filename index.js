import * as lexer from './lexer.js';
import * as parser from './parser.js';

export const modulos = [lexer, parser];

const selectorArchivos = document.getElementById('archivo');
const areaTexto = document.getElementById('editor');

export let contenidoFuente = "";

export async function ejecutarAnalisis() {
    chequearArchivoOTexto();
    
    modulos.forEach(modulo => {
        modulo.ejecutarAnalisis(); 
    });
}

async function chequearArchivoOTexto() {
    if (selectorArchivos.files[0]) {
        contenidoFuente = await selectorArchivos.files[0].text();
        areaTexto.value = contenidoFuente;
    } else {
        contenidoFuente = areaTexto.value;
    }
}
