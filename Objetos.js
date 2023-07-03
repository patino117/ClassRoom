/*Realiza una práctica donde intentes acceder, usando notación corchetes, a las propiedades de un objeto sin 
utilizar comillas, y concluye porque si fue posible o no acceder a ellas.*/

const persona = {
  nombre: 'Juan',
  edad: 30,
  'lugar de nacimiento': 'México'
};

console.log(persona[nombre]); // Accediendo a la propiedad "nombre" sin comillas
console.log(persona[edad]); // Accediendo a la propiedad "edad" sin comillas
console.log(persona['lugar de nacimiento']); // Accediendo a la propiedad "lugar de nacimiento" con comillas
