/*En esta ocasión deberás realizar una aplicación en JS para resolver una ecuación de segundo grado usando la formula general.  
Deberás ingresar los tres valores a, b y c y devolver las soluciones de las misma x1 y x2.
Para esto debes escribir una función que reciba como argumentos los valores de a, b y c y devuelva, si existen, los dos valores 
al mismo tiempo. Presentarás tu práctica en una rama adicional en tu repositorio de github.*/

function resolverEcuacionSegundoGrado(a, b, c) {
    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        return null;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2];
    }
}

// Uso
const a = parseFloat(prompt('Ingrese el valor de a:'));
const b = parseFloat(prompt('Ingrese el valor de b:'));
const c = parseFloat(prompt('Ingrese el valor de c:'));

const soluciones = resolverEcuacionSegundoGrado(a, b, c);

if (soluciones === null) {
    console.log('La ecuación no tiene soluciones reales.');
} else if (soluciones.length === 1) {
    console.log('La ecuación tiene una solución: x = ' + soluciones[0]);
} else {
    console.log('La ecuación tiene dos soluciones: x1 = ' + soluciones[0] + ', x2 = ' + soluciones[1]);
}

/*
Si el discriminante es menor que 0, significa que la ecuación no tiene soluciones reales, por lo que se devuelve "null".
Si el discriminante es igual a 0, la ecuación tiene una solución única, por lo que se calcula x utilizando la fórmula -b / (2 * a) y se devuelve como un array [x].
Si el discriminante es mayor que 0, la ecuación tiene dos soluciones distintas. Se calculan x1 y x2 utilizando la fórmula (-b ± √(discriminante)) / (2 * a) y se devuelven como un array [x1, x2].
*/

/*Ejemplos:
Ejemplo 1:
Valor de a: 1
Valor de b: -3
Valor de c: 2
Resultado: La ecuación tiene dos soluciones: x1 = 2, x2 = 1

Ejemplo 2:
Valor de a: 2
Valor de b: 4
Valor de c: 2
Resultado: La ecuación tiene una solución: x = -1

Ejemplo 3:
Valor de a: 3
Valor de b: -2
Valor de c: 5
Resultado: La ecuación no tiene soluciones reales.
*/