import { Fruta } from './fruta.js';

window.addEventListener('load', function() {
    const lienzo = document.getElementById('lienzo');
    const ctx = lienzo.getContext('2d');
    lienzo.width = 500;
    lienzo.height = 500;

    class Juego {
        constructor(ancho, alto, contexto) {
            this.ancho = ancho;
            this.alto = alto;
            this.contexto = contexto;
            this.tiempoSiguienteFruta = 0;
            this.intervaloFruta = 500;
            this.ultimoTiempo = 0;
            this.frutas = [];
        }

        actualizar(marcaTiempo) {
            let deltaTiempo = marcaTiempo - this.ultimoTiempo;
            this.ultimoTiempo = marcaTiempo;
            this.tiempoSiguienteFruta += deltaTiempo;
            if(this.tiempoSiguienteFruta > this.intervaloFruta) {
                this.frutas.push(new Fruta(juego))
                this.tiempoSiguienteFruta = 0;
                this.frutas.sort(function(a,b){
                    return a.width - b.width;
                });
            }
            [...this.frutas].forEach(f => {
                f.actualizar(deltaTiempo)
                f.dibujar(this.contexto)
            });
            this.frutas = this.frutas.filter(f=> !f.debeDesaparecer);
        }
        dibujar() {
            this.contexto.clearRect(0, 0, this.ancho, this.alto);
        }
    }

    const juego = new Juego(lienzo.width, lienzo.height, ctx);
   
    function animate(marcaTiempo) {
        juego.dibujar();
        juego.actualizar(marcaTiempo);
        requestAnimationFrame(animate);
    }
    animate(0);
})