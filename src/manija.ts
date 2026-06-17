import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  // COMPLETAR o importar desde index.ts
  return (letra.repeat(cantidad))
}

function filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string {
  // COMPLETAR
  /* fila n: 2*n+1 asteriscos, con espacios a izquierda a derecha 
  Pueden asumir que el tamaño es impar, así el triángulo queda centrado. */
  let cantCaracteres:number = 2*fila + 1
  let cantEspacios:number = tamaño - 1 - fila
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el triángulo? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let tipo: string = preguntar('¿Qué tipo de triángulo? (isoceles, rectangulo) ');

// COMPLETAR
