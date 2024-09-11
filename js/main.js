const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")



//*Vaiables globales
 //let esqueleto = null;
 perso = null;
 brazo = null;
 brazo2 = null;
let bordeIzquierdo = 500;






// funciones globales del juego
function starGame(){

    splashScreenNode.style.display ="none";
    gameScreenNode.style.display ="flex";


     perso = new Personaje()

     brazo = new obstaculos(70, 480)
     brazo2 = new obstaculos(70, 250 )
     brazo3 = new obstaculos(200, 360 )
     brazo4 = new obstaculos(200, 150 )
     //brazo5 = new obstaculos(170, 60 )
     brazo6 = new obstaculos(340, 250 )
     brazo7 = new obstaculos(340, 60 )

     esqueleto = new Skeletor()


  setInterval(() => {

       gameLoop()
       

   },Math.round (1000/60))

   




window.addEventListener("keydown", (event) => {
    
    if (event.key === "p"){

      perso.movimientoPerso("right")   
    }
        if(event.key === "u"){

            perso.movimientoPerso("left")
        }

})



function escalera(){

    if(perso.x = bordeIzquierdo){
        perso.bajar()
    }
 }



}



function gameLoop(){


   brazo.mover()
   brazo2.mover()
   brazo3.mover()
   brazo4.mover()
   //brazo5.mover()
   brazo6.mover()
   brazo7.mover()

    setTimeout(()=> {
    esqueleto.movimientoSkeleto()
       },2500)
    

};
 



// event listener
startBtnNode.addEventListener("click", starGame)




 