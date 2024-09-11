const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")



//*Vaiables globales
 esqueleto = null;
 perso = null;
 brazo = null;
 brazo2 = null;
 brazo3 = null;
 brazo4 = null;
 brazo7 = null;
 brazo6 = null;
tobogan = null;
let gameIntervalId = null;





// funciones globales del juego
function starGame(){

    splashScreenNode.style.display ="none";
    gameScreenNode.style.display ="flex";


     perso = new Personaje()
     brazo = new Obstaculos(90, 480)
     brazo2 = new Obstaculos(70, 250 )
     brazo3 = new Obstaculos(200, 360 )
     brazo4 = new Obstaculos(200, 150 )
     brazo6 = new Obstaculos(350, 250 )
     brazo7 = new Obstaculos(350, 60 )
     tobogan = new Tobogan(570, 80)
      
     esqueleto = new Skeletor()
    

     
     gameIntervalId = setInterval(() => {

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
 
 }







function gameLoop(){


   brazo.mover()
   brazo2.mover()
   brazo3.mover()
   brazo4.mover()
   brazo6.mover()
   brazo7.mover()

    setTimeout(()=> {
    esqueleto.movimientoSkeleto()
       },2500)

    detectarColisionPersoEsqueleto()

    detectarColisionPersoMano()
    detectarColisionPersoMano2()
    detectarColisionPersoMano3()
    detectarColisionPersoMano4()
    detectarColisionPersoMano6()
    detectarColisionPersoMano7()
    bajarTobogan()


};


function detectarColisionPersoEsqueleto(){
        
        if (
            perso.x <   esqueleto.x + esqueleto.w &&
            perso.x +  perso.w >  esqueleto.x &&
            perso.y <   esqueleto.y +  esqueleto.h &&
            perso.y +  perso.h >  esqueleto.y
          ) {
             //console.log("choque");
            gameOver()
          }
};


function detectarColisionPersoMano(){
        
    if (
        perso.x <   brazo.x + brazo.w &&
        perso.x +  perso.w >  brazo.x &&
        perso.y <   brazo.y +  brazo.h &&
        perso.y +  perso.h >  brazo.y
      ) {
         //console.log("choque");
        gameOver()
      }
};
 
function detectarColisionPersoMano2(){
        
    if (
        perso.x <   brazo2.x + brazo2.w &&
        perso.x +  perso.w >  brazo2.x &&
        perso.y <   brazo2.y +  brazo2.h &&
        perso.y +  perso.h >  brazo2.y
      ) {
         //console.log("choque");
        gameOver()
      }
};

function detectarColisionPersoMano3(){
        
    if (
        perso.x <   brazo3.x + brazo3.w &&
        perso.x +  perso.w >  brazo3.x &&
        perso.y <   brazo3.y +  brazo3.h &&
        perso.y +  perso.h >  brazo3.y
      ) {
         //console.log("choque");
        gameOver()
      }
};

function detectarColisionPersoMano4(){
        
    if (
        perso.x <   brazo4.x + brazo4.w &&
        perso.x +  perso.w >  brazo4.x &&
        perso.y <   brazo4.y +  brazo4.h &&
        perso.y +  perso.h >  brazo4.y
      ) {
         //console.log("choque");
        gameOver()
      }
};

function detectarColisionPersoMano6(){
        
    if (
        perso.x <   brazo6.x + brazo6.w &&
        perso.x +  perso.w >  brazo6.x &&
        perso.y <   brazo6.y +  brazo6.h &&
        perso.y +  perso.h >  brazo6.y
      ) {
          
      }
};

function detectarColisionPersoMano7(){
        
    if (
        perso.x <   brazo7.x + brazo7.w &&
        perso.x +  perso.w >  brazo7.x &&
        perso.y <   brazo7.y +  brazo7.h &&
        perso.y +  perso.h >  brazo7.y
      ) {
          
        gameOver()
      }
};


function gameOver(){
    clearInterval(gameIntervalId)
   //gameBoxNode.innerHTML = ""
    // al reiniciar juego
  // perso = null;
 // gameScreenNode.style.display = "none"
   //gameOverScreenNode.style.display = "relative"

}

function bajarTobogan(){

    if (
        perso.x <  tobogan.x + tobogan.w &&
        perso.x +  perso.w > tobogan.x &&
        perso.y <  tobogan.y + tobogan.h &&
        perso.y +  perso.h > tobogan.y
      ) {
 
        perso.y += 10
        perso.node.style.top = `${perso.y}px`
      }


}




function Restart(){



}


// event listener

startBtnNode.addEventListener("click", starGame)




 