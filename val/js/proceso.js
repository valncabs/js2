
//creamos un objeto para almacenar 

let=estudiante={
    nombre:"valentina",
    apellido:"cabas",
    edad: 20,
    genero: 'F',
    casado:false,
    direccion: "calle 136 No 9-53"
}

//guardar
localStorage.setItem("nuevoestudiante", JSON.stringify(estudiante))
//extraer un unico dato
let datos = JSON.parse(localStorage.getItem("nuevoestudiante"))
alert(datos.nombre)


