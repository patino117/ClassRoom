/* Basado en lo que se hizo en clase, donde se ingresa un arreglo de datos, un nuevo elemento y posición, deberás 
ingresar un elemento a un arreglo en cualquier posición, la práctica la deberás subir como una rama adicional en tu repositorio*/

function insertarElemento(arr, elemento, posicion) {
    if (posicion < 0 || posicion > arr.lenght) {
        console.log("posicion valida");
        return;
    }
    arr.splice(posicion, 0, elemento);
}

let arreglo = [1, 2, 3, 4, 5];
console.log("arreglo inicial:", arreglo);

let nuevoElemento = 10;
let posicionDeseada = 2;

insertarElemento(arreglo, nuevoElemento, posicionDeseada);
console.log("areglo despues de insertar:", arreglo);

//Para insertar el nuevo elemento "10" en una posicion deseada "2"; recordando que comenzamos contando desde el 0,1,2,3,4... en la programacion