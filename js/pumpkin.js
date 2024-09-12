class Calabaza{

    constructor(x, y, h, w){

        this.x = x;
        this.y = y;
        this.h = h,
        this.w = w;
        this.brazoSpeed = 1;
        this.movingUp = true
        this.rango = 150;
        this.limiteSuperior = this.y - this.rango;
        this.limiteInferior = this.y + this.rango;
        
    
         this.node = document.createElement("img")
         this.node.src ="./imagenes/pumpkin_11.png"
         gameBoxNode.append(this.node)
    
         this.node.style.width = `${this.w}px`
         this.node.style.height = `${this.h}px`
         this.node.style.position = "absolute"
    
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    
        
        
    }
    moverPumpkin(){

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
