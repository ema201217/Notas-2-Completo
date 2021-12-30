let fs = require('fs')

module.exports = moduleTask = {
   
    getJsonToScript/*leerJSON*/: ()=>{
    return JSON.parse(fs.readFileSync('./tareas.json','utf-8'))  //retornamos el archivo convertido de JSON a JavaScript
   },
   
   toListForConsole:(archives)=>{
       console.log("");
    console.log("  (**************************Trabajo Practico Nº3 Notas****************************)");
    console.log("");
       archives.forEach((arch,index)=>{
           console.log("    ♠ Titulo : " +arch.titulo + " ♦ Estado : " + arch.estado + " || Nota Nº : " + (index+1))
           console.log("---------------------------------------------------------------------------------------");

        }) //usamos una iteracion para que por caada archivo nos imprima por consola el titulo ,el estado y un numero de notas
        console.log("  (**************************Trabajo Practico Nº3 Notas****************************)");
        console.log("")
    },
   
   writeJson:(archiveJavaS,array)=>{     //funcion que nos sirve para agregar un archivo en la primer posicion del array y luego la guardamos en el JSON
    array.push(archiveJavaS)     //introducimos un elemento en la primera posicion
    moduleTask.saveTask(array)   //usamos un metodo creado mas abajo
     
   },
   
   buildTask : (titulo,estado="pendiente")=>{   // introducimos en una propidad un valor por defecto que seria estado pendiente
    let tarea = {         //creamos un objeto en la variable tarea
        titulo : titulo,  //titulo recibe el argumento que ingresemos en el parametro titulo
        estado : estado   //estado recibe el argumento que ingresemos en el parametro estado
    }
        return tarea  //retornamos el objeto creado
   },
   
   saveTask:(arr)=>{   //recive como parametro un array      
   let arrJSON= JSON.stringify(arr)       //convertimos el archivo de JavaScript a JSON
    return fs.writeFileSync('./tareas.json',arrJSON,'utf-8') //introducimos en el archivo JSON el dato ingresado mas lo que ya estaba
   },
   
   deshacer:()=>{
       let archiveJavaS = moduleTask.getJsonToScript()   // llamamos el metodo creado  para traer el archivo json convertido a script
       archiveJavaS.pop()  //retornamos sobre un motodo de array, extrayendo de esta forma el primer elemento ingresado
       moduleTask.saveTask(archiveJavaS)
      
   },

   filterForState: (state)=>{
    let archiveJavaS = moduleTask.getJsonToScript()  // llamamos el metodo creado  para traer el archivo json convertido a script
       let filtrado = archiveJavaS.filter((archive)=>{  // usamos el metodo filter para recorrer el array general
         return archive.estado == state         //retornamos sobre la condicion para que nos devuelva los elementos que cumplan con dicha condicion
        })   
        moduleTask.readForState(filtrado)       //usamos un metodo que creamos para que nos lea cada uno de los elementos que cumplen con la condicion nombrada anteriormente
   },
   
   readForState:(archivFilter)=>{ archivFilter.forEach((element,index)=>{   //metodo creado que nos recorre cada elemento filtrado y nos devuelve tambien el indice(index)
    console.log("                   --- Nota Nº (" + (index+1) + ") ---               ");   // imprimimos la numeracion de las notas filtradas en este caso
    console.log("    --- Titulo : " + element.titulo + " ||  Estado : " + element.estado+" ---") //imprimimos la descripcion de cada propiedad del elemento
    console.log("̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ "); // imprimimos una linea de separacion por cada elemento
   })
  },
  
   win :{
    windowStateUnde : ()=>{  //funcion ventana de estado indefinido
        console.log("");
        console.log("(*******************Trabajo Practico Nº3 Notas*******************)");
        console.log("|                                                                |");
        console.log("|           ----- Ingrese un titulo y un estado -----            |")
        console.log("|---Usar-comillas-para-definir-el-titulo-y-otras-para-el-estado--|");        // imprimimos por consola
        console.log("|        ________________________________________________        |");
        console.log("|       | *** Los estados validos para ingresar son :    |       |");
        console.log("|       | ♠ - Terminado                     _       _    |       |");
        console.log("|       | ♠ - En proceso               __  / | __  / | __|       |");
        console.log("|       | ♠ - Pendiente   (for defect)/  |/  |/  |/  |/  |       |");
        console.log("|       ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´       |");
        console.log("(*************************Emanuel Arroyo*************************)");
},
   windowTaskAdd : (archive)=>{      //funcion ventana de tarea añadida
    console.log("");
    console.log("     /////////////////////   Tarea añadida   /////////////////////\n"); 
    console.log("          ♠ Titulo : " + archive.titulo + " ♦ Estado : " + (archive.estado).toUpperCase() )
    console.log("------------------------------------------------------------------"); 
    console.log("  (****************Trabajo Practico Nº3 Notas*****************)");
    console.log("");
},
   windowStateValid : ()=>{  //ventana informando los estados permitidos
    console.log("");
    console.log("(********************Trabajo Practico Nº3 Notas*******************)");
    console.log("                                                                   ");
    console.log("         ________________________________________________          ");
    console.log("        |           §§    Estados validos   §§           |         ");
    console.log("        |´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´|         ");
    console.log("        | ♠ - Terminado ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´|         ");
    console.log("        |´´´´´´´´´´´´´ ♠ - En proceso ´´´´´´´´´´´´´´´´´´´|         ");
    console.log("        |´´´´´´´´´´´´´´´´´´´´´´´´´´´ ♠ - Pendiente ´´´´´´|         ");
    console.log("        |________________________________________________|         ");
    console.log("                                                                   ");
    console.log("(*************************Emanuel Arroyo**************************)");
},

}
}
