export class Fruta {
    constructor(juego) {
        this.juego = juego;

        this.imagen = new Image();
        this.imagen.src = 'assets/cute_apple_run.png';
        
        this.spriteAncho = 128;
        this.spriteAlto = 128;

        this.cuadro = 0;
        this.cuadrosMax = 0;

        this.tiempoDesdeCambio = 0;
        this.intervaloCambio = Math.random() * 50 + 50;

        this.tamanioModificador = Math.random() * 0.6 + 0.4;


        this.ancho = this.spriteAncho * this.tamanioModificador;
        this.alto = this.spriteAlto * this.tamanioModificador;
        this.debeDesaparecer = false;

        this.x = juego.ancho;
        this.y = Math.random() * (juego.alto - this.alto);
        this.direccionX = Math.random() * 3 + 5;
    }

    actualizar(deltaTiempo) {
        this.x -=this.direccionX;
        if (this.x < 0 - this.ancho) this.debeDesaparecer = true;
        if(this.tiempoDesdeCambio > this.intervaloCambio){
            if(this.cuadro > this.cuadrosMax) this.cuadro = 0;
            else this.cuadro++;
        }

        this.tiempoDesdeCambio +=deltaTiempo;

    }

    dibujar(contexto) {
        // contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
        contexto.drawImage(this.imagen, this.cuadro * this.spriteAncho, 0, this.spriteAncho,this.spriteAlto,this.x, this.y, this.ancho, this.alto);
    }
}