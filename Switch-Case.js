/*En el juego para dos personas llamado "ROCA, PAPEL Y TIJERAS" cada
jugador escoge ser "T", "R" o "P" respectivamente. El jugador se determina así por
medio de la función: roca rompe tijeras, las tijeras cortan el papel, el papel cubre la
roca, el juego es un empate si ambos jugadores eligen la misma opción. Elaborar
un programa para que determine cual jugador gana, la salida debe mostrarse por
la función de la siguiente forma: "T-R Roca rompe tijeras gana el jugador 2".

Implementa este programa usando sentencias SWITCH-CASE.
Presentarás tu práctica en una rama adicional en tu repositorio de github.*/

function jugarRocaPapelTijeras(jugador1, jugador2) {
  let resultado = "";

  switch (jugador1) {
    case "R":
      switch (jugador2) {
        case "R":
          resultado = "Empate";
          break;
        case "P":
          resultado = "Papel cubre roca. Gana el jugador 2";
          break;
        case "T":
          resultado = "Roca rompe tijeras. Gana el jugador 1";
          break;
        default:
          resultado = "Jugador 2 eligió una opción inválida";
          break;
      }
      break;
    case "P":
      switch (jugador2) {
        case "R":
          resultado = "Papel cubre roca. Gana el jugador 1";
          break;
        case "P":
          resultado = "Empate";
          break;
        case "T":
          resultado = "Las tijeras cortan el papel. Gana el jugador 2";
          break;
        default:
          resultado = "Jugador 2 eligió una opción inválida";
          break;
      }
      break;
    case "T":
      switch (jugador2) {
        case "R":
          resultado = "Roca rompe tijeras. Gana el jugador 2";
          break;
        case "P":
          resultado = "Las tijeras cortan el papel. Gana el jugador 1";
          break;
        case "T":
          resultado = "Empate";
          break;
        default:
          resultado = "Jugador 2 eligió una opción inválida";
          break;
      }
      break;
    default:
      resultado = "Jugador 1 eligió una opción inválida";
      break;
  }

  return resultado;
}

// Ejemplo de uso
const jugador1 = prompt("Jugador 1, elige 'R' (roca), 'P' (papel) o 'T' (tijeras):");
const jugador2 = prompt("Jugador 2, elige 'R' (roca), 'P' (papel) o 'T' (tijeras):");

const resultado = jugarRocaPapelTijeras(jugador1.toUpperCase(), jugador2.toUpperCase());

console.log(resultado);
