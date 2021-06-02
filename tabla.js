
     // ELEMENTOS HTML
     const tabla = document.getElementById("tabla-elementos");


     // REGISTRO DE PERSONAS 
     const elementos = [
        {
             id: 1,
             nombre: "Pesas kettlebell ",
             Stock: "disponible",
             función: "entrenamiento muscular",
             direccion: "2668 Ranchview Dr"
         },
           
         {
             id: 2,
             nombre: "Pelota de yoga",
             stock: "disponible",
             función: " flexibilidad y equilibrio",
             direccion: "9117 Oak Ridge Ln"
         },
            
         {
             id: 3,
             nombre: "Mancuernas ",
             stock: "disponible",
             función: "fuerza muscular",
             direccion: "4240 Photinia Ave"
         },
     
         {
             id: 4,
             nombre: "Rueda abdominal",
             stock: "Intermedio",
             función: "desarrollo de abdomen",
             direccion: "2976 Valley View Ln"
         },
     
         {
             id: 5,
             nombre: "Step",
             stock: "Intermedio",
             función: "desarrollo de glúteos",
             direccion: "2995 Edwards Rd"
         }
     
        // {
        //       id: 6,
        //       nombre: 'Fausto',
        //       apellido: 'Carmesí',
        //       email: 'Fauscarmesí@them.com',
        //       direccion: 'West Side Records'
        //  } 
     ];  
     
     
     // FUNCIONES DEL DOM
     function insertarFila(tabla, elemento) {
     
         const fila = document.createElement("tr");
         
         for (const atributo in elemento) {
     
             // Creamos una celda nueva
             const celda = document.createElement("td");
             celda.style.color = 'grey';                //+ color
     
             // Asignamos el valor del atributo como contenido textual dentro de la celda.
             celda.textContent = elemento[atributo]; 
             // Usamos la notación corchetes para acceder al atributo ya que es una variable.
     
             // Insertamos la celda a nuestra fila.
             fila.appendChild(celda);
     
         }
     
         // Insertamos nuestra fila a la tabla.
         tabla.appendChild(fila);
     
     }
         
     
     // Recorremos el array y las mostramos en HTML
     for (const elemento of elementos) {
         insertarFila(tabla, elemento);
     }
     //______________________________________________
     

    // declare a variables first
const $clickMeElement = $('.galeria-port').eq(0);
 
// use this variable
$clickMeElement.on( "click", function() {
    alert("Estos son productos originales");
});

//Desarrollo de DOM y eventos