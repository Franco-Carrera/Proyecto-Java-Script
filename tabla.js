
     // ELEMENTOS HTML
     const tabla = document.getElementById("tabla-personas");


     // REGISTRO DE PERSONAS 
     const personas = [
        {
             id: 1,
             nombre: "Guy",
             apellido: "Rose",
             email: "guy.rose@example.com",
             direccion: "2668 Ranchview Dr"
         },
           
         {
             id: 2,
             nombre: "Ritthy",
             apellido: "Hill",
             email: "ritthy.hill@example.com",
             direccion: "9117 Oak Ridge Ln"
         },
            
         {
             id: 3,
             nombre: "Derrick",
             apellido: "Hanson",
             email: "derrick.hanson@example.com",
             direccion: "4240 Photinia Ave"
         },
     
         {
             id: 4,
             nombre: "Ted",
             apellido: "Peters",
             email: "ted.peters@example.com",
             direccion: "2976 Valley View Ln"
         },
     
         {
             id: 5,
             nombre: "Ted",
             apellido: "Peters",
             email: "ted.peters@example.com",
             direccion: "2995 Edwards Rd"
         },
     
        {
              id: 6,
              nombre: 'Fausto',
              apellido: 'Carmesí',
              email: 'Fauscarmesí@them.com',
              direccion: 'West Side Records'
         } 
     
     ]; //_/agregamos ;
     
     
     // FUNCIONES DEL DOM
     function insertarFila(tabla, persona) {
     
         const fila = document.createElement("tr");
         
         for (const atributo in persona) {
     
             // Creamos una celda nueva
             const celda = document.createElement("td");
             celda.style.color = 'grey';                //+ color
     
             // Asignamos el valor del atributo como contenido textual dentro de la celda.
             celda.textContent = persona[atributo]; 
             // Usamos la notación corchetes para acceder al atributo ya que es una variable.
     
             // Insertamos la celda a nuestra fila.
             fila.appendChild(celda);
     
         }
     
         // Insertamos nuestra fila a la tabla.
         tabla.appendChild(fila);
     
     }
         
     
     // Recorremos el array y las mostramos en HTML
     for (const persona of personas) {
         insertarFila(tabla, persona);
     }
     //______________________________________________
     