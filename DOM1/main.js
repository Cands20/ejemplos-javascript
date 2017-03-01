

//var cajas = document.getElementsByTagName('div')

//cajas[0].textContent='Que pasa prro'
//cajas[1].innerHTML = '<b>Prro del mal</b>'

var caja = document.getElementById('primera')
caja.textContent = 'primera caja'
//No se recomienda agregar elementos con el metodo write
//document.write('<div class = "caja">Nuevo elemento</div>')

//5 Pasos para agregar un nuevo elemento
//Paso 1.Crear el nuevo element(CreateElement())
var elementoNuevo=document.createElement('div')
//Paso2 .Crear el contenido (CreateTextNode())
var nodoContenido= document.createTextNode('Nuevo elemento')
//Paso3 Añadir el contenido al elemento(appendChild())
elementoNuevo.appendChild(nodoContenido);
//Paso4 Agregar atributos al elemento (setAttribute())
elementoNuevo.setAttribute('class', 'caja colorcoral')

//Paso5 Agregar el elemento al documento(appendChild())
//Agrega el elemento al final
/*var contenedor = document.getElementById('contenedor')
contenedor.appendChild(elementoNuevo)
*/
var contenedor = document.getElementById('contenedor')
var primera = document.getElementById('primera')

contenedor.insertBefore(elementoNuevo, primera)

//Eleminar la caja con el id = tercera
//var contenedor = document.getElementById('contenedor')
var tercera = document.getElementById('tercera')

contenedor.removeChild(tercera)