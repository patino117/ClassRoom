/* En base a lo visto en la clase de hoy deberás completar tu ejercicio en donde lea una frase y verificar si es 
palíndromo, además imprimir la primera letra con la que comienza la frase/palabra y la letra ubicada a la mitad.

Como se ha mencionado, la forma de entrega es individual, pero el trabajo es en equipo. Para ello deberás entregar 
por este medio el link de tu repositorio en una rama independiente (deberá ser una rama por cada ejercicio)*/

function esPalindromo(frase) {
  frase = frase.replace(/\s/g, '').toLowerCase();

  for (let i = 0; i < frase.length / 2; i++) {
    if (frase[i] !== frase[frase.length - 1 - i]) {
      return false; // No es un palíndromo
    }
  }
  return true; // Es un palíndromo
}

function obtenerPrimeraLetra(frase) {
  return frase.charAt(0);
}

function obtenerLetraEnLaMitad(frase) {
  const indiceMitad = Math.floor(frase.length / 2);
  return frase.charAt(indiceMitad);
}

const frase = prompt('Ingresa una frase:');
const primeraLetra = obtenerPrimeraLetra(frase);
const letraEnLaMitad = obtenerLetraEnLaMitad(frase);

console.log(`Palíndromo: ${esPalindromo(frase)}`);
console.log(`Primera letra: ${primeraLetra}`);
console.log(`Letra en la mitad: ${letraEnLaMitad}`);
