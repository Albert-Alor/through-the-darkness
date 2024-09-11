class Skeletor{

    constructor(){


   this.x= -20;
   this.y= 25;
   this.h= 100;
   this.w= 80;
   this.speed= 0.5;




    

     this.node = document.createElement("img")
     this.node.src ="./imagenes/SkellyA.gif"
     gameBoxNode.append(this.node)

     this.node.style.width = `${this.w}px`
     this.node.style.height = `${this.h}px`
     this.node.style.position = "absolute"

    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`


    }

    movimientoSkeleto(){

        this.x += this.speed
        this.node.style.left = `${this.x}px`

    }



}