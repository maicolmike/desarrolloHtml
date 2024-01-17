//alert("Hola este es mi Javascript");
let nombre = "Marta 2";
console.log(nombre);
nombre = "Maria";
console.log(nombre);


const nombre1 = "Maicol Yela";
var nombre2 = "Brahim Diaz";

console.log(nombre1);
console.log(nombre2);

 // Obtén el elemento del título
 let titulo = document.querySelector(".logo img");
 console.log(titulo);

 // Define el nuevo contenido del título
 let contenidoTitulo = "Nombre";

 // Cambia el contenido del título
 titulo.innerHTML = contenidoTitulo;
 console.log(titulo);


 // Define el nuevo contenido del título
 let contenidoTitulo1 = "Nombre";
 // Obtén el elemento del texto "Acerca de mí"
 let titulo1 = document.querySelector('.acerca-de h2');
 console.log(titulo1);
 console.log(contenidoTitulo1);
 titulo1.innerHTML = contenidoTitulo1;
 console.log(titulo1);

 //condicionales
 let textoTitulo1 = titulo1.innerHTML
 console.log(textoTitulo1);

 if (textoTitulo1 == "Nombre") {
    titulo1.innerHTML = "Otro";
 }else {
    console.log("No se cumple");
 }

 // funciones
 let nombres = "Maicol";
 let ciudad = "Mocoa";
 let gusto = "Baloncesto";

 let parrafo = document.querySelector(".parrafo2");
 console.log(parrafo);

 function cambiarTexto(nombres,ciudad,gusto) {
    let contenido = `Me llamo ${nombres} y soy de ${ciudad} ademas me gusta ${gusto}`;
    return contenido;
 }

 parrafo.innerText = cambiarTexto(nombres, ciudad, gusto);
