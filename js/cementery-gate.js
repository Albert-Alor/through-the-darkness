class Gate{

    constructor(x, y, h, w){


   this.x= x;
   this.y= y;
   this.h= h;
   this.w= w;
    



    

     this.node = document.createElement("img")
     this.node.src ="./imagenes/cemetarygate_0-removebg-preview.png"
     gameBoxNode.append(this.node)

     this.node.style.width = `${this.w}px`
     this.node.style.height = `${this.h}px`
     this.node.style.position = "absolute"

    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`


    }
}