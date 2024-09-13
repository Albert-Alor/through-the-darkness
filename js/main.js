const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

 
const startBtnNode = document.querySelector("#start-btn")
const RestartBtnNode = document.querySelector("#Restart")


const gameBoxNode = document.querySelector("#game-box")

const scoreNode = document.querySelector("#score");

const audio = document.querySelector("#musica1");
const audio2 = document.querySelector("#musica2");

 

let scoreperso = 0;

let pumpkinArray = [new Calabaza(200, 180, 30, 30), new Calabaza(330, 180, 30, 30), new Calabaza(430, 180, 30, 30), new Calabaza(100, 180, 30, 30)
];

  function colisionCalabaza(){
    pumpkinArray.forEach(pumpkin0 => {

      if (
        perso.x <  pumpkin0.x + pumpkin0.w &&
        perso.x +  perso.w > pumpkin0.x &&
        perso.y <  pumpkin0.y + pumpkin0.h &&
        perso.y +  perso.h > pumpkin0.y
      ) {
        
        scoreperso++
        scoreNode.innerText = `Score:${scoreperso}`
        console.log(scoreperso)
      }
  })
  }


 esqueleto = null;
 perso = null;
 brazo = null;
 brazo2 = null;
 brazo3 = null;
 brazo4 = null;
 brazo7 = null;
 brazo6 = null;
 tobogan = null;
 tobogan2 = null;
 let gameIntervalId = null;
 pumpkin0 = null;
 pumpkin1 = null;
 pumpkin2 = null;
 pumpkin3 = null;
 puertaSalida = null;
  
 
 function starGame(){

    splashScreenNode.style.display ="none";
    gameScreenNode.style.display ="flex";
    
     perso = new Personaje()
     brazo = new Obstaculos(120, 480)
     brazo2 = new Obstaculos(120, 250 )
     brazo3 = new Obstaculos(250, 380 )
     brazo4 = new Obstaculos(250, 150 )
     brazo6 = new Obstaculos(350, 270 )
     brazo7 = new Obstaculos(360, 480 )
     tobogan = new Tobogan(570, 80, 90,25)
     tobogan2 = new Tobogan(30, 200, 120, 25)
     esqueleto = new Skeletor()
     puertaSalida = new Gate(510,270, 150, 130)
     puertaEntra = new puertaEntrada()
     audio.play()


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
    
  pumpkinArray.forEach(element =>{

    element.moverPumpkin()
  })

    setTimeout(()=> {
    esqueleto.movimientoSkeleto()
     
       },1000)

    detectarColisionPersoEsqueleto()

    detectarColisionPersoMano()
    detectarColisionPersoMano2()
    detectarColisionPersoMano3()
    detectarColisionPersoMano4()
    detectarColisionPersoMano6()
    detectarColisionPersoMano7()
    bajarTobogan()
    esqueletoTobogan()
    otraDirectionEsque()
    esqueletoTobogan2()
    otraDirectionEsque2()
    bajarTobogan2()
    llegarPuerta()
    colisionCalabaza()
    
    
};

function detectarColisionPersoEsqueleto(){
        
        if (
            perso.x <   esqueleto.x + esqueleto.w &&
            perso.x +  perso.w >  esqueleto.x &&
            perso.y <   esqueleto.y +  esqueleto.h &&
            perso.y +  perso.h >  esqueleto.y
          ) {
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
          
         scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};
 
function detectarColisionPersoMano2(){
        
    if (
        perso.x <   brazo2.x + brazo2.w &&
        perso.x +  perso.w >  brazo2.x &&
        perso.y <   brazo2.y +  brazo2.h &&
        perso.y +  perso.h >  brazo2.y
      ) {
          scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};

function detectarColisionPersoMano3(){
        
    if (
        perso.x <   brazo3.x + brazo3.w &&
        perso.x +  perso.w >  brazo3.x &&
        perso.y <   brazo3.y +  brazo3.h &&
        perso.y +  perso.h >  brazo3.y
      ) {
          
        scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};

function detectarColisionPersoMano4(){
        
    if (
        perso.x <   brazo4.x + brazo4.w &&
        perso.x +  perso.w >  brazo4.x &&
        perso.y <   brazo4.y +  brazo4.h &&
        perso.y +  perso.h >  brazo4.y
      ) {
          scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};

function detectarColisionPersoMano6(){
        
    if (
        perso.x <   brazo6.x + brazo6.w &&
        perso.x +  perso.w >  brazo6.x &&
        perso.y <   brazo6.y +  brazo6.h &&
        perso.y +  perso.h >  brazo6.y
      ) {
          scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};

function detectarColisionPersoMano7(){
        
    if (
        perso.x <   brazo7.x + brazo7.w &&
        perso.x +  perso.w >  brazo7.x &&
        perso.y <   brazo7.y +  brazo7.h &&
        perso.y +  perso.h >  brazo7.y
      ) {
          
         scoreperso--
         scoreNode.innerText = `Score:${scoreperso}`
      }
};

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
function esqueletoTobogan(){
    if (
        esqueleto.x <  tobogan.x + tobogan.w &&
        esqueleto.x +  esqueleto.w > tobogan.x &&
        esqueleto.y <  tobogan.y + tobogan.h &&
        esqueleto.y +  esqueleto.h > tobogan.y
      ) {
 
        esqueleto.y += 10
        esqueleto.node.style.top = `${esqueleto.y}px`

         
      }

}

  function otraDirectionEsque(){
   if (esqueleto.y >= 120){

        esqueleto.x -= 1.5
        esqueleto.node.style.left = `${esqueleto.x}px`
    }
}

function esqueletoTobogan2(){

  if (
    esqueleto.x <  tobogan2.x + tobogan2.w &&
    esqueleto.x +  esqueleto.w > tobogan2.x &&
    esqueleto.y <  tobogan2.y + tobogan2.h &&
    esqueleto.y +  esqueleto.h > tobogan2.y
  ) {

    esqueleto.y += 2
    esqueleto.node.style.top = `${esqueleto.y}px`

     
  }
}

function otraDirectionEsque2(){
  if (esqueleto.y >= 220){

       esqueleto.x += 1.5
       esqueleto.node.style.left = `${esqueleto.x}px`
   }
}

function bajarTobogan2(){

  if (
      perso.x <  tobogan2.x + tobogan2.w &&
      perso.x +  perso.w > tobogan2.x &&
      perso.y <  tobogan2.y + tobogan2.h &&
      perso.y +  perso.h > tobogan2.y
    ) {

      perso.y += 10
      perso.node.style.top = `${perso.y}px`
    }


}

function llegarPuerta(){

  if (
    perso.x <   puertaSalida.x + puertaSalida.w &&
    perso.x +  perso.w >  puertaSalida.x &&
    perso.y <   puertaSalida.y +  puertaSalida.h &&
    perso.y +  perso.h >  puertaSalida.y
  ) {
    
    gameOver()

  }


}

function gameOver(){

  clearInterval(gameIntervalId)
  gameBoxNode.innerHTML =""
   

  audio2.play()
  gameScreenNode.style.display = "none"
  gameOverScreenNode.style.display = "flex"

}

function reiniciar(){

  splashScreenNode.style.display ="flex";
  gameScreenNode.style.display ="none";
   gameOverScreenNode.style.display ="none";
  //starGame()

 // gameBoxNode.innerHTML =""
  //clearInterval(gameIntervalId)
  
}


startBtnNode.addEventListener("click", starGame)

RestartBtnNode.addEventListener("click", reiniciar)