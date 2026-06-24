import { preguntar } from './lib/consola.ts';

function formulaRepetir(letra:string, cantidad:number):string {
  let resultado = ""
  while (cantidad > 0) {
    resultado = resultado + letra
    cantidad = cantidad - 1
  }
  return resultado
}

function repetirLetra(letra: string, cantidad: number): string {
  return formulaRepetir(letra, cantidad)
  // COMPLETAR
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
// COMPLETAR
let filas:number = tamaño

while (filas > 0){
  console.log (repetirLetra(caracter, tamaño))
  filas = filas - 1
}