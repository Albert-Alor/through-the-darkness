class Tobogan{

    constructor(x, y, h, w){

        this.x = x;
        this.y = y;
        this.h = h,
        this.w = w;
        this.walkSpeed = 15;
        this.tobo = 200;
        
    
         this.node = document.createElement("img")
         this.node.src ="./imagenes/tobogan.png"
         gameBoxNode.append(this.node)
    
         this.node.style.width = `${this.w}px`
         this.node.style.height = `${this.h}px`
         this.node.style.position = "absolute"
    
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    
        
        
    }
}






















