class Personaje{

    constructor(){

    this.x = 100;
    this.y = 40;
    this.h = 55,
    this.w = 35;
    this.walkSpeed = 15;
    this.tobo = 200;
    

     this.node = document.createElement("img")
     this.node.src ="./imagenes/personaje-removebg-preview.png"
     gameBoxNode.append(this.node)

     this.node.style.width = `${this.w}px`
     this.node.style.height = `${this.h}px`
     this.node.style.position = "absolute"

    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    
    
    

}

 movimientoPerso(direction){

  if(direction === "right"){

  this.x += this.walkSpeed
  this.node.style.left = `${this.x}px`
  }

  if(direction === "left"){

    this.x -= this.walkSpeed
    this.node.style.left = `${this.x}px`  
  }
  
}


}




