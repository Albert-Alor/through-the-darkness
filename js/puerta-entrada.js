class puertaEntrada{

    constructor(){


   this.x= -10;
   this.y= 0;
   this.h= 70;
   this.w= 90;
    

     this.node = document.createElement("img")
     this.node.src ="./imagenes/gate_0.jpg"
     gameBoxNode.append(this.node)

     this.node.style.width = `${this.w}px`
     this.node.style.height = `${this.h}px`
     this.node.style.position = "absolute"

    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`


    }
}