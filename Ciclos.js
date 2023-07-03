/*Realiza una función en JS que de la siguiente salida 
1
2
4
7
11
16
22
29
37
46
56
Puedes usar while, for o do-while.
Presentarás tu práctica en una rama adicional en tu repositorio de github.*/

function generarSecuencia() {
  let numero = 1;
  let incremento = 1;

  while (numero <= 56) {
    console.log(numero);
    numero += incremento;
    incremento++;
  }
}

generarSecuencia();
