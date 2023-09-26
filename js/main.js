console.log("Hello world");

const obtenerRecetas = async () =>{

    try {
        const respuesta = await fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies');
        /*console.log(respuesta); //chequeo que entre bien. */
        
    
       if (respuesta.status === 200){
            const datos = await respuesta.json();
            // console.log(datos); primero me dice que es un objeto y  me dice que dentro de data esta el array
            // muestra de lo que tiene datos. console.log(datos.data); 
            console.log(datos);
            let recetas = "";

            datos.data.forEach(receta => {
                recetas +=  `
                <div class="receta">

                    <h3 class="titulo">${receta.nombre}</h3>
                    <img class="imagen" src="${receta.imagen}">
                    <p class="tiempo">${receta.tiempo_coccion}</p>
                    <p class="dificultad">°Nivel de dificultad: ${receta.nivel_dificultad}</p>
                    <p class="instrucciones">${receta.instrucciones}</p>
                </div>
            `;
                
            });

            document.getElementById("contenedor").innerHTML = recetas;
            
        }
        else {console.log("no tengo idea");}
       


    } 
    catch (error){
        console.log(error.message);
    }
}


obtenerRecetas();


