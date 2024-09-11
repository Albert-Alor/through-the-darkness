class Obstaculos{
    constructor(y , x){

        this.y = y;
        this.x = x;
        this.w = 50;
        this.h = 80;
        this.brazoSpeed = 1;
        this.movingUp = true
        this.rango = 50;
        this.limiteSuperior = this.y - this.rango;
        this.limiteInferior = this.y + this.rango;
         
        this.node = document.createElement("img")
        this.node.src = "./imagenes/skeleton_hand_0-removebg-preview.png"
        gameBoxNode.append(this.node)

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"

        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

    }
         mover(){

            if(this.movingUp === true && this.y < this.limiteSuperior ){
                this.movingUp = false
            }
            if(this.movingUp === false && this.y > this.limiteInferior){
                this.movingUp = true
            }

            if( this.movingUp === false){
                this.y += this.brazoSpeed
                this.node.style.top = `${this.y}px`
            }
            if ( this.movingUp === true){
                this.y -= this.brazoSpeed
                this.node.style.top = `${this.y}px`
      } 
    }



}