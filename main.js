//Validando inputs del usuario
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
//Limpiandolos
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
///_______________________Fin formulario______________________


//Array productos principales

 const listaProductos = [];
 let misProductos = ('Ingrese la cantidad de artículos que desee comprar');
    
const crearListaDeProductos = function (cantidad) {
  for (let i = 1; i <= cantidad; i++){
      const producto = [];
      let nombreProducto = prompt (`Ingrese el nombre del producto nº ${i}`);
      producto.push (nombreProducto);
      let numeroProducto = parseInt (prompt(`Ingrese el numero de su producto ${nombreProducto}`));
       listaProductos.push (producto);
       
  }
  for (productos in listaProductos) {
    nombre = listaProductos [productos] + '<br>';
    document.write (nombre);
    
  } 
}  
   crearListaDeProductos (misProductos);
   console.log (misProductos);

//Como puedo interactuar en mi página con este array(?)
//  alert ('Ha realizado su pago con exito');


 // Registro de productos 
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
     }

     ];
 
//_________________________________________________
   //Para ordenar atributos de nuevos productos
   class Product {
       constructor (nombre, precio) {
         this.nombre = nombre;
         this.precio = parseFloat (precio);
         this.vendido = false;
       }
     }

  function sortProducts (array,atribute,type) { 

  // copia del arrray  
      const products = array.slice();

   //tipo de ordenamiento  
     switch (type) {

       case 'ASC':
      //ascendente
      return products.sort((p1,p2) => p1[atribute] >p2 [atribute]?1:-1);
     
       case 'DESC':
       //descendente
       return products.sort((p1,p2) => p2[atribute] >p1[atribute] ? 1:-1);
       
       default:
         return products;
      }  
  }  

   const ejemploProductos = [];

  //utilizo clase Product
 ejemploProductos.push (new Product('producto-2', '900'));
 ejemploProductos.push (new Product('producto-3', '450'));
 ejemploProductos.push (new Product('producto-1', '700')) 

   const productosAscendente = sortProducts (ejemploProductos, 'precio', 'ASC');
    console.log (productosAscendente);
///__________________________________________________________

    
 //For each para.. llamar elemento específico de [{productos}]
  productos.forEach ((elemento) => { 
    if (typeof elemento == 'object') {
     console.log  (elemento.stock)
    }
     console.log (elemento);
  });  

     //Como mostrar al cliente si hay o no stock en página


  //saludando    
  function saludar () {
     this.name = 'Estos son mis productos';
    
  }
 const ObjetoSaludar =  new saludar();
  console.log (ObjetoSaludar.name)


//______________________________________________

let productosEnTexto = JSON.stringify (productos);
 // console.log (productosEnTexto);

localStorage.expone = productosEnTexto;
 //console.log
(JSON.parse(productosEnTexto));

 let expone = [];
 let productosParseado = JSON.parse (localStorage.expone); 

function agregarAlCarrito(producto) {
  expone.push (producto);
  localStorage.expone = JSON.stringify (expone);
}
 agregarAlCarrito(10);
 agregarAlCarrito(50);

 console.log (expone);

 //___________________________________________