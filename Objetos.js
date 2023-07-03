/*Realiza una práctica donde intentes acceder, usando notación corchetes, a las propiedades de un objeto sin 
utilizar comillas, y concluye porque si fue posible o no acceder a ellas.*/

const objeto = {
  propiedad1: "Hello Buffalo",
  propiedad2: "Monster",
  propiedad3: "La Sierra",
};

const propiedad = "propiedad3"; /*tenemos tres propiedades las cuales poseen una notacion las cuales podemos cambiar
el resultado cambiando la propiedad*/

console.log(objeto[propiedad]);
