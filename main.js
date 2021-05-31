const listaOrdenadores = [];
let misOrdenadores = ('Ingrese la cantidad de compus que desee comprar');

function valida() {
    let nombre = document.getElementById ('nombre').value;
    let radios = document.getElementsByName ('comprar');
    let deportista = document.getElementById ('deporte');
    let valorRadio = '';


  for (let a = 0; a < radios.length; a++) {
    if (radios[a].checked) {
      valorRadio = radios[a].value;
    }
  }

   if (deportista.checked) {
     deportista = 'Si';
   }else {
     deportista = 'No';
   }

 console.log ('Nombre: ' + nombre + ' Compras: ' +valorRadio + ' Es deportista: ' + deportista );
}


function limpiar() {
   let nombre = document.getElementById ('nombre').value = '';
   let radios = document.getElementsByName ('comprar');
 
   for (let a = 0; a < radios.length; a++) {
     if (radios[a].checked) {
         radios[a].checked = false
     }
   }

   let deportista = document.getElementById ('deporte');
   deportista.checked = false;

}


  const galeria = document.getElementsByClassName ('portafolio');

  //Registro de productos 
   const productos = [ 
     {
       id: 1,
       nombre: 'Ketpler',
       stock: 'Hay',
       peso: '10kg'
     },

     {
      id: 2,
      nombre: 'Pelota goma',
      stock: 'Hay',
      peso: '800 gramos'
    },
     
    {
      id: 3,
      nombre: 'Mancuernas',
      stock: 'Hay',
      peso: '12kg'
    },

    {
      id: 4,
      nombre: 'Rueda',
      stock: 'No Hay',
      peso: '1kg'
    },

   ];

   function insertarGaleria (galeria, producto) {
      
      const encuadre = document.createElement ('div');

      for (const atributo in producto)
       {
        const celda = document.createElement ('img');

            celda.textContent = producto [atributo];

             encuadre.appendChild (celda); 
      }
     
      galeria.appendChild (encuadre);

   }

    for (const producto of productos) {
      insertarGaleria (galeria, producto);
    }
   






const crearListaDeOrdenadores = function (cantidad) {
  for (let i = 1; i <= cantidad; i++){
      const ordenador = [];
      let nombreOrdenador = prompt (`Ingrese el nombre del ordenador nº ${i}`);
      ordenador.push (nombreOrdenador);
      let numeroOrdenador = parseInt (prompt(`Ingrese el numero de su ordenador ${nombreOrdenador}`));
       listaOrdenadores.push (ordenador);
       
  }
  for (ordenadores in listaOrdenadores) {nombre = listaOrdenadores [ordenadores] + '<br>';
    document.write (nombre);
    
  } 
}  
   crearListaDeOrdenadores (misOrdenadores);

 console.log (listaOrdenadores); 

//  alert ('Ha realizado su pago con exito');

 const compus = [
 {
     nombre: 'FranPc',
     procesador: 'I3 novena generacion',
     ram: '32GB',
     espacio: '1TB', nro:1
   
  },

 {
     nombre: 'GuillePc',
     procesador: 'Ryzen5 3600',
    ram: '16GB',
     espacio: '500GB', nro:2
 },

 {     nombre: 'RandomPc',
         procesador: 'I7 novena generacion',
        ram: '32GB',
        espacio: '2TB', nro:3
 }

 ];

 console.log (compus);
 
