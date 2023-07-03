/* En base a lo visto en la clase de hoy deberás completar tu ejercicio en donde lea una frase y verificar si es 
palíndromo, además imprimir la primera letra con la que comienza la frase/palabra y la letra ubicada a la mitad.*/

function esPalindromo(frase) {
  frase = frase.replace(/\s/g, '').toLowerCase();

  for (let i = 0; i < frase.length / 2; i++) {
    if (frase[i] !== frase[frase.length - 1 - i]) {
      return false; // Falso; palíndromo
    }
  }
  return true; // Verdadero; palíndromo
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

/*Ejemplo 1:
Frase: "Anita lava la tina"
Resultado: Es un palíndromo

Explicación: Al leer la frase de izquierda a derecha y de derecha a izquierda, se obtiene la misma secuencia de letras, 
ignorando los espacios en blanco y considerando mayúsculas y minúsculas.

Ejemplo 2:
Frase: "Hola mundo"
Resultado: No es un palíndromo

Explicación: Al leer la frase de izquierda a derecha y de derecha a izquierda, se obtienen secuencias de letras diferentes, por lo que no es un palíndromo.*/
