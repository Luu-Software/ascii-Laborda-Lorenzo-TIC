import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  return (letra.repeat(cantidad))
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