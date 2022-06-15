"use scrict"

//         Display al hacer click en Game Start

let startGame= document.querySelector("#comenzar");

let gameDisplay = document.querySelector(".game");

startGame.addEventListener("click", () =>{
    gameDisplay.style.display = "flex";
})

//            Comienzo del juego, variables globales

let recordatorio = Symbol("Elaborar CSS de #Respuestas y #numerosPrevios")

let buttonSubmit = document.querySelector("#submit");

let formAdivina = document.querySelector("#adivina");

let numeroAAdivinar = parseInt(Math.random()*100)

let numeroChance;

let contadorOportunidades = 1;

let listaNumeros = document.querySelector("#numerosPrevios");

let arrayImprimir = [];

let respuesta = document.querySelector("#respuesta");

// Ejecucion al clickear el boton "Check!"

buttonSubmit.addEventListener("click", function(){

    numeroChance = formAdivina.valueAsNumber

    if (contadorOportunidades < 10){



    if (numeroChance > numeroAAdivinar) {

        contadorOportunidades++;

        //almaceno los numeros ingresados en el array

      arrayImprimir.push(numeroChance)

      numerosPrevios.textContent = `${arrayImprimir.join(", ")}`

      respuesta.textContent = "El numero ingresado es MAYOR al que hay que adivinar REINGRESE";

    } else if (numeroChance < numeroAAdivinar) {


        contadorOportunidades++;

        arrayImprimir.push(numeroChance)

        numerosPrevios.textContent = `${arrayImprimir.join(", ")}`

        respuesta.textContent = "El numero ingresado es MENOR al que hay que adivinar REINGRESE";

//else del if hijo

    } 

    else {

        respuesta.textContent=`Ganaste, el numero adivinado es ${numeroAAdivinar} FELICITACIONES!`

    }

}
// else, del if padre
else  {

        alert(`Perdiste! Usaste tus 10 intentos. El numero era ${numeroAAdivinar}.
         Aprieta la tecla f5 para volver a intentarlo`)



        gameShutOff();
             



        

}

})

let gameShutOff = () => {

    gameDisplay.style.display = "none";
    startGame.style.display = "none";

   
}



















