//19.- Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en
//hora.

class RelojDigital {
    constructor() {
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
    }

    ajustarHora(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    mostrarHora() {
        console.log(`Hora actual: ${this.horas}:${this.minutos}:${this.segundos}`);
    }
}

const miReloj = new RelojDigital();
miReloj.ajustarHora(10, 30, 0); 
miReloj.mostrarHora(); 
