import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: "app-tablas",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicar {
    public operaciones: Array<string>;
    public resultados: Array<number>;
    @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;

    constructor() {
        this.operaciones = [];
        this.resultados = [];
    }

    mostrarTabla(): void{
        var num = parseInt(this.cajaNumeroRef.nativeElement.value);
        //console.log(num)
        for (var i=0; i < 10; i++){
            this.operaciones[i] = num + " * " + i;
            this.resultados[i] = num * i;
        }
    }
}